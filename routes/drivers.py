from fastapi import FastAPI, Request, HTTPException, Form,APIRouter,Depends
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse,JSONResponse
from fastapi.staticfiles import StaticFiles
from core.utils import decode_token,TokenDecodeError
from typing import Annotated
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base,get_db,base_url
import models

driver = APIRouter()
templates = Jinja2Templates(directory="templates")

# Start Socket 
from core.socket_manager import get_socketio_asgi_app
from core.socket_io import sio
app = FastAPI()

sio_asgi_app = get_socketio_asgi_app(app)
app.add_route("/socket.io/", route=sio_asgi_app, methods=["GET", "POST"])
app.add_websocket_route("/socket.io/", sio_asgi_app)


# End Sokcet
@driver.get("/driver")
async def read_root(request: Request, db: Annotated[Session, Depends(get_db)],base_url: str = base_url):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    error_driver = request.query_params.get("error_driver")
    error_customer = request.query_params.get("error_customer")
    success_customer = request.query_params.get("success_customer")
    success_driver = request.query_params.get("success_driver")
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        if user.user_type==2 :
            return templates.TemplateResponse("driver_trip_list.html", {"user": user,"base_url": base_url,"request": request,"error": error, "success": success, "error_driver": error_driver, "success_customer": success_customer, "error_customer": error_customer, "success_driver": success_driver})
        return RedirectResponse("/?error=You+are+not+authorized",302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)

@driver.get("/trips/get")
async def trips_get(request: Request,db:Annotated[Session, Depends(get_db)]):
    trips = db.query(models.Trips).order_by(models.Trips.id.desc()).filter(models.Trips.fare.is_(None)).all()
    return trips

@driver.get("/bid/submit/{id}")
async def bid_submit(id: int, request: Request, db: Annotated[Session, Depends(get_db)],base_url: str = base_url):
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        trips_by_id = db.query(models.Trips).filter(models.Trips.id == id).first()
        # Example: trips = db.query(models.Trips).filter(models.Trips.id == id).all()
        error = request.query_params.get("error")
        success = request.query_params.get("success")
        error_driver = request.query_params.get("error_driver")
        error_customer = request.query_params.get("error_customer")
        success_customer = request.query_params.get("success_customer")
        success_driver = request.query_params.get("success_driver")
        return templates.TemplateResponse("driver_bid.html", {"trips": trips_by_id,"base_url": base_url,"request": request,"error": error, "success": success, "error_driver": error_driver, "success_customer": success_customer, "error_customer": error_customer, "success_driver": success_driver})
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)

@driver.get("/bid/get/{id}")
async def trips_get(id: int,request: Request,db:Annotated[Session, Depends(get_db)]):
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        bids = db.query(models.Bids)\
            .join(models.Drivers, models.Bids.driver_id == models.Drivers.id)\
            .join(models.Trips, models.Bids.trip_id == models.Trips.id)\
            .filter(models.Bids.trip_id == id)\
            .all()
        bidsss = db.query(models.Bids).filter(models.Bids.trip_id == id).all()
        bid_data = [(bid.id, bid.amount, bid.driver.name) for bid in bids]
        trip_data = [(bid.id, bid.amount, bid.trip.fare) for bid in bids]
        return {'bids': bids, 'user': user,'bidsss':bidsss}
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)


@driver.post("/bid-submit/{id}")
async def bid_store(
    id: int,
    request: Request,
    db: Annotated[Session, Depends(get_db)],
    amount: int = Form(...)
    ):

    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        BidsAdd = models.Bids(
                trip_id=id,
                driver_id=user.id,
                amount=amount,
            )   
        db.add(BidsAdd)
        db.commit()
        db.refresh(BidsAdd)
        print(f"Bid: {BidsAdd.amount}")
        await sio.emit("BidList" + str(id), 'New Bid Store BidList' + str(id))
        return RedirectResponse(url=f"/bid/submit/{id}?success_customer=Trips+Add+successfully", status_code=302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)