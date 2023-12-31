from fastapi import FastAPI, HTTPException, Depends, Request,status,Query
from fastapi.responses import HTMLResponse, RedirectResponse, Response,JSONResponse,UJSONResponse
from pydantic import BaseModel
import requests
import models
from database import engine, SessionLocal, Base
from sqlalchemy.orm import Session,joinedload
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from sqlalchemy import Column, Integer , String,desc
# from sqlalchemy.orm import mapped_column
from sqlalchemy.ext.declarative import declarative_base
import routes.auth
import routes.drivers
import routes.customers
import routes.admins
import routes.driver_subscription
import routes.trips
import routes.api
import routes.nogod
import routes.bids
from jose import JWTError, jwt
from core.utils import ALGORITHM, JWT_SECRET_KEY, decode_token, TokenDecodeError
from core.helper import get_user_by_email
from core.otp import sms,OtpStoreDB
from core.bkash import process_token_request,credentials
from fastapi.security import HTTPBasic, HTTPBasicCredentials
import secrets 
Base = declarative_base()
from typing import Annotated
from fastapi.openapi.docs import get_swagger_ui_html, get_redoc_html
from datetime import datetime, timedelta

app = FastAPI(
    title="Garibook API",
    docs_url=None,
    redoc_url=None,
    openapi_url="/api/openapi.json",
    default_response_class=UJSONResponse
    )
# swagger auth
security = HTTPBasic()
def get_current_username(credentials: HTTPBasicCredentials = Depends(security)) -> str:
    correct_username = secrets.compare_digest(credentials.username, "garibook")
    correct_password = secrets.compare_digest(credentials.password, "Garibook#NRB")
    if not (correct_username and correct_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Basic"},
        )
    return credentials.username
@app.get("/docs", response_class=HTMLResponse,include_in_schema=False)
async def get_docs(username: str = Depends(get_current_username)) -> HTMLResponse:
    return get_swagger_ui_html(openapi_url="/api/openapi.json", title="docs")


@app.get("/redoc", response_class=HTMLResponse,include_in_schema=False)
async def get_redoc(username: str = Depends(get_current_username)) -> HTMLResponse:
    return get_redoc_html(openapi_url="/api/openapi.json", title="redoc")


# swagger auth end


models.Base.metadata.create_all(bind=engine)
templates = Jinja2Templates(directory="templates")
app.mount("/assets", StaticFiles(directory="templates/assets"), name="assets")
app.mount("/admin/assets", StaticFiles(directory="templates/admin/assets"), name="admin-assets")
app.include_router(routes.auth.router)
app.include_router(routes.admins.admin)
app.include_router(routes.driver_subscription.driverSubcription)
app.include_router(routes.trips.trips)
app.include_router(routes.api.api)
app.include_router(routes.nogod.nogod_app)
app.include_router(routes.bids.bids)
from middleware.CheckUser import UserCheck

# Start Socket 
from core.socket_manager import get_socketio_asgi_app
from core.socket_io import sio

sio_asgi_app = get_socketio_asgi_app(app)
app.add_route("/socket.io/", route=sio_asgi_app, methods=["GET", "POST"])
app.add_websocket_route("/socket.io/", sio_asgi_app)


# End Sokcet

app.include_router(routes.drivers.driver)
app.include_router(routes.customers.customer)


def get_db() -> Session:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]

@app.exception_handler(404)
async def custom_404_handler(request, __):
    return templates.TemplateResponse("404.html",{"request": request})

@app.exception_handler(500)
async def custom_404_handler(request, __):
    return templates.TemplateResponse("500.html",{"request": request})

@app.get("/",include_in_schema=False)
async def read_root(request: Request, db: db_dependency):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    trips = (
            db.query(models.Trips).order_by(models.Trips.id.desc()).filter(models.Trips.fare.is_(None))\
            .join(models.Customers, models.Trips.user_id == models.Customers.id)\
            .join(models.Drivers, models.Trips.driver_id == models.Drivers.id)\
            .all()
        )
    alltrips = db.query(models.Trips).order_by(models.Trips.id.desc()).filter(models.Trips.fare.is_(None)).all()
    bid_data = [(bid.id, bid.driver.name) for bid in trips]
    trip_data = [(bid.id, bid.customer.name) for bid in trips]
    try:
        user = await decode_token(token, db)
        return templates.TemplateResponse("index.html", {"user": user,"HomeTrips": alltrips, "request": request, "error": error, "success": success})
    except TokenDecodeError as e:
        return templates.TemplateResponse("index.html", {"HomeTrips": alltrips,"request": request, "error": error, "success": success})

fake_items = [{"item_name": f"Item {i}"} for i in range(1, 101)]


@app.get("/home/trips")
async def read_items(request: Request,skip: int = Query(0), limit: int = Query(9),db: Session = Depends(get_db)):
    token = request.cookies.get("access_token")
    
    alltrips = (
        db.query(models.Trips)
        .filter(models.Trips.fare.is_(None))
        .order_by(desc(models.Trips.id))
        .options(joinedload(models.Trips.customer), joinedload(models.Trips.driver))
        .offset(skip)
        .limit(limit)
        .all()
    )
    try:
        user = await decode_token(token, db)
        return {"user": user, "trip_data": alltrips}
    except TokenDecodeError as e:
        return {"user": None, "trip_data": alltrips}



@app.get("/ip")
def read_root(request: Request):
    domain = request.base_url
    path = request.url.path

    return {"domain": domain, "path": path}

@app.get("/process_token_request")
async def bkash():
    # print(credentials)
    result = await process_token_request(credentials,amount='700',reference='sub')
    # return result
    
    html_content = f"""
        <html>
        <head>
            <title>Bkash Payment</title>
        </head>
        <body>
            <script>
                window.location.href = "{result}";
            </script>
        </body>
        </html>
        """

    return HTMLResponse(content=html_content, status_code=200)


@app.get("/payment/callback/{slug}", response_class=RedirectResponse, status_code=302)
async def payment_response_endpoint(request: Request, slug: str,db:db_dependency):
    # Extract paymentID and status from query parameters
    token = request.cookies.get("access_token")
    payment_id = request.query_params.get("paymentID")
    status = request.query_params.get("status")
    reference = request.query_params.get("reference")
    id = request.query_params.get("pay_id")
    try:
        user = await decode_token(token, db)
        if status == "success":
            if  reference == "package_subscription":
                driver = db.query(models.Drivers).filter(models.Drivers.id == user.id).first()
                print(f"date: {id}")
                driver.subscription_id = id
                driver.subscription_status = 1
                driver.subscription_at = datetime.now()
                db.commit()
        print(f'/payment/{slug}/{status}')
        return RedirectResponse(url=f"/payment/{slug}/{status}")
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
    
@app.get("/payment/{slug}/{status}")
async def payment_status(request: Request, status: str,db:db_dependency):
    print("status 1", status)
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        if status == "failed":
            return templates.TemplateResponse("payment_alert.html", {"user": user, "request": request, "success": status, "massage": "Payment failed for user transaction reference"})
        elif status == "failure":
            return templates.TemplateResponse("payment_alert.html", {"user": user, "request": request, "success": status, "massage": "Payment failed for user transaction reference"})
        elif status == "success":
            return templates.TemplateResponse("payment_alert.html", {"user": user, "request": request, "success": status, "massage": "Payment successful for user transaction reference"})
        elif status == "cancel":
            return templates.TemplateResponse("payment_alert.html", {"user": user, "request": request, "success": status, "massage": "Payment cancel for user transaction reference"})
        else:
            raise HTTPException(status_code=400, detail="Invalid payment status")
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
