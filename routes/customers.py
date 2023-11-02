from fastapi import FastAPI, Request, HTTPException, Form,APIRouter,Depends
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse,JSONResponse
from fastapi.staticfiles import StaticFiles
from core.utils import decode_token,TokenDecodeError
from typing import Annotated
import models
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base,get_db
from middleware.CheckUser import UserCheck
customer = APIRouter()

templates = Jinja2Templates(directory="templates")

db_dependency = Annotated[Session, Depends(get_db)]

# Start Socket 
from core.socket_manager import get_socketio_asgi_app
from core.socket_io import sio
app = FastAPI()

sio_asgi_app = get_socketio_asgi_app(app)
app.add_route("/socket.io/", route=sio_asgi_app, methods=["GET", "POST"])
app.add_websocket_route("/socket.io/", sio_asgi_app)


# End Sokcet

@customer.get("/customer")
async def read_root(request: Request,db:Annotated[Session, Depends(get_db)]):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    error_driver = request.query_params.get("error_driver")
    error_customer = request.query_params.get("error_customer")
    success_customer = request.query_params.get("success_customer")
    success_driver = request.query_params.get("success_driver")
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        if user.user_type==1 :
            return templates.TemplateResponse("customer_request_trip.html", {"user": user,"request": request,"error": error, "success": success, "error_driver": error_driver, "success_customer": success_customer, "error_customer": error_customer, "success_driver": success_driver})
        return RedirectResponse("/?error=You+are+not+authorized",302)

    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)

@customer.post("/trip/store")
async def trip_store(
    request: Request,
    db: db_dependency,
    car_name: str = Form(...),
    pick_up_location: str = Form(...),
    location: str = Form(...),
    ):

    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        tripsAdd = models.Trips(
                user_id=user.id,
                car_name=car_name,
                pick_up_location=pick_up_location,
                location=location,
            )   
        db.add(tripsAdd)
        db.commit()
        db.refresh(tripsAdd)
        print(f"trips: {tripsAdd.car_name}")
        # await sio.emit("tripList", tripsAdd)
        return RedirectResponse("/customer?success_customer=Trips+Add+successfully",302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
   