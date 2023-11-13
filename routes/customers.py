from fastapi import FastAPI, Request, HTTPException, Form,APIRouter,Depends
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse,JSONResponse
from fastapi.staticfiles import StaticFiles
from core.utils import decode_token,TokenDecodeError
from typing import Annotated
import models
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base,get_db,base_url
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
    
@customer.get("/trip/accept")
async def read_root(request: Request,db:Annotated[Session, Depends(get_db)],base_url: str = base_url):
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
            return templates.TemplateResponse("customer_accept_trips.html", {"user": user,"base_url": base_url,"request": request,"error": error, "success": success, "error_driver": error_driver, "success_customer": success_customer, "error_customer": error_customer, "success_driver": success_driver})
        return RedirectResponse("/?error=You+are+not+authorized",302)

    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)

@customer.post("/trip/store")
async def trip_store(
    request: Request,
    db: db_dependency,
    car_name: str = Form(None),
    pick_up_location: str = Form(None),
    location: str = Form(None),
    ):
    if  car_name is None :
        return RedirectResponse("/customer?error=Car Name is require", 302)
    if  pick_up_location is None:
        return RedirectResponse("/customer?error=Pick Up Location is required", 302)
    if  location is None:
        return RedirectResponse("/customer?error=Destination is required", 302)
    
   
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
        await sio.emit("tripList",'New Trip Store')
        return RedirectResponse("/customer?success_customer=Trips+Add+successfully",302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
   

@customer.get("/customer/trips/get")
async def trips_get(request: Request,db:Annotated[Session, Depends(get_db)]):
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        if user.user_type==1 :
            my_trips = db.query(models.Trips).filter(models.Trips.user_id==user.id).filter(models.Trips.fare.is_(None)).order_by(models.Trips.id.desc()).all()
            return my_trips
        return RedirectResponse("/?error=You+are+not+authorized",302)

    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)

@customer.get("/customer/trips/accepted")
async def trips_get(request: Request,db:Annotated[Session, Depends(get_db)]):
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        if user.user_type==1 :
            my_trips = db.query(models.Trips).join(models.Drivers).filter(models.Trips.user_id==user.id).order_by(models.Trips.id.desc()).all()
            bid_data = [(trip.driver.name) for trip in my_trips]
            return my_trips
        return RedirectResponse("/?error=You+are+not+authorized",302)

    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)


@customer.get("/show/bid/{id}")
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
        return templates.TemplateResponse("customer_bid.html", {"user": user,"trips": trips_by_id,"base_url": base_url,"request": request,"error": error, "success": success, "error_driver": error_driver, "success_customer": success_customer, "error_customer": error_customer, "success_driver": success_driver})
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
    
    
@customer.get("/bid/accept/{id}")
async def bid_submit(id: int, request: Request, db: Annotated[Session, Depends(get_db)]):
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        bid = db.query(models.Bids).filter(models.Bids.id == id).first()
        if bid is not None:
            TripAccept = db.query(models.Trips).filter(models.Trips.id == bid.trip_id).first()
            TripAccept.driver_id=bid.driver_id
            TripAccept.fare=bid.amount
            db.commit()
            db.refresh(TripAccept)
            await sio.emit("TripAccept" + str(bid.trip_id), 'Trip Accepted' + str(bid.trip_id))
            return RedirectResponse(url=f"/trip/accept?success_customer=Trips+Accept+successfully", status_code=302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)