from fastapi import FastAPI, Request, HTTPException, Form, APIRouter, Depends, UploadFile, File, status
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse, Response,JSONResponse
from database import engine, SessionLocal, Base,db_dependency,base_url
from datetime import datetime, timedelta, timezone
import pytz
from passlib.context import CryptContext
from core.utils import decode_token,TokenDecodeError

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
import models
from sqlalchemy.orm import Session
from typing import Annotated, Optional
from core.helper import insert_image, get_user_by_email,subscription_validity
from core.utils import create_access_token, create_refresh_token

from pydantic import BaseModel
import hashlib
from jose import JWTError, jwt
import secrets
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from database import get_db
templates = Jinja2Templates(directory="templates")

from core.utils import ACCESS_TOKEN_EXPIRE_MINUTES, REFRESH_TOKEN_EXPIRE_MINUTES

api = APIRouter(prefix="/api/v1")
templates = Jinja2Templates(directory="templates")


# Start Socket 
from core.socket_manager import get_socketio_asgi_app
from core.socket_io import sio
app = FastAPI()

sio_asgi_app = get_socketio_asgi_app(app)
app.add_route("/socket.io/", route=sio_asgi_app, methods=["GET", "POST"])
app.add_websocket_route("/socket.io/", sio_asgi_app)


# End Sokcet

# Auth API


@api.post("/customer/register/submit", tags=["Authentication"])
async def register(
        db: db_dependency,
        name: str = Form(None),
        email: str = Form(None),
        password: str = Form(None),
        confirm_password: str = Form(None),
        image: UploadFile = File(None),
):
    if  name is None :
        return JSONResponse(content={"error": "Name is require"}, status_code=500)
    if  email is None:
        return JSONResponse(content={"error": "Email is required"}, status_code=500)
    if  password is None:
        return JSONResponse(content={"error": "Password is require"}, status_code=500)
    if  confirm_password is None:
        return JSONResponse(content={"error": "Confirm password is required"}, status_code=500)
    if  image is None:
        return JSONResponse(content={"error": "Image is required"}, status_code=500)
    if password != confirm_password:
        return JSONResponse(content={"error": "Passwords do not match"}, status_code=500)
    existing_driver = await get_user_by_email(email, db, models.Drivers)
    existing_customer = await get_user_by_email(email, db, models.Customers)
    existing_admin = await get_user_by_email(email, db, models.Admins)
    if existing_driver:
        return JSONResponse(content={"error": "Email already exists"}, status_code=500)
    elif existing_customer:
        return JSONResponse(content={"error": "Email already exists"}, status_code=500)
    elif existing_admin:
        return JSONResponse(content={"error": "Email already exists"}, status_code=500)
    # hashed_password = pwd_context.hash(password)
    hashed_password = hashlib.md5(password.encode()).hexdigest()
    dir = "templates/assets/upload/profile/"
    filename = await insert_image(image, dir)
    if filename is None:
        return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
    print(f"file:{filename}")
    register = models.Customers(
        name=name,
        email=email,
        password=hashed_password,
        image=filename,
    )
    db.add(register)
    db.commit()
    db.refresh(register)
    return JSONResponse(content={"success": "Customer Registration successfully"}, status_code=200)



@api.post("/driver/register/submit", tags=["Authentication"])
async def driver_register(
        db: db_dependency,
        name: str = Form(None),
        email: str = Form(None),
        password: str = Form(None),
        confirm_password: str = Form(None),
        image: UploadFile = File(None),
):
    if  name is None :
        return JSONResponse(content={"error": "Name is require"}, status_code=500)
    if  email is None:
        return JSONResponse(content={"error": "Email is required"}, status_code=500)
    if  password is None:
        return JSONResponse(content={"error": "Password is require"}, status_code=500)
    if  confirm_password is None:
        return JSONResponse(content={"error": "Confirm password is required"}, status_code=500)
    if  image is None:
        return JSONResponse(content={"error": "Image is required"}, status_code=500)
    if password != confirm_password:
        return JSONResponse(content={"error": "Passwords do not match"}, status_code=500)
    
    existing_driver = await get_user_by_email(email, db, models.Drivers)
    existing_customer = await get_user_by_email(email, db, models.Customers)
    existing_admin = await get_user_by_email(email, db, models.Admins)
    if existing_driver:
        return JSONResponse(content={"error": "Email already exists"}, status_code=500)
    elif existing_customer:
        return JSONResponse(content={"error": "Email already exists"}, status_code=500)
    elif existing_admin:
        return JSONResponse(content={"error": "Email already exists"}, status_code=500)
    # hashed_password = pwd_context.hash(password)
    hashed_password = hashlib.md5(password.encode()).hexdigest()

    dir = "templates/assets/upload/profile/"
    filename = await insert_image(image, dir)
    if filename is None:
        return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
    print(f"file:{filename}")
    register = models.Drivers(
        name=name,
        email=email,
        password=hashed_password,
        image=filename,
    )
    db.add(register)
    db.commit()
    db.refresh(register)
    return JSONResponse(content={"success": "Driver Registration successfully"}, status_code=200)



@api.post("/driver-login", status_code=status.HTTP_200_OK,  tags=["Authentication"])
async def customer_login_user(
        db: db_dependency,
        email: str = Form(None),
        password: str = Form(None)):
    if  email is None:
        return JSONResponse(content={"error": "Email is required"}, status_code=500)
    if  password is None:
        return JSONResponse(content={"error": "Password is required"}, status_code=500)
    db_user = db.query(models.Drivers).filter(models.Drivers.email == email).first()
    if db_user and db_user.password == hashlib.md5(password.encode()).hexdigest():
        if db_user.status == 1:
            # If the user is authenticated, generate an access token
            access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
            refresh_token_expires = timedelta(minutes=REFRESH_TOKEN_EXPIRE_MINUTES)
            access_token = create_access_token(db_user.email)
            refresh_token = create_refresh_token(db_user.email)

            # Update the access token in the database
            db_user.access_token = access_token
            db.commit()
            return {"access_token": access_token, "token_type": "bearer", "token_expires":access_token_expires}

        return JSONResponse(content={"error": "Account is banned"}, status_code=403)
    return JSONResponse(content={"error": "Invalid email or password"}, status_code=404)



@api.post("/customer-login", status_code=status.HTTP_200_OK, tags=["Authentication"])
async def drover_login_user(
        db: db_dependency,
        email: str = Form(None),
        password: str = Form(None)):
    if  email is None:
        return JSONResponse(content={"error": "Email is required"}, status_code=500)
    if  password is None:
        return JSONResponse(content={"error": "Password is required"}, status_code=500)
    db_user = db.query(models.Customers).filter(models.Customers.email == email).first()
    if db_user and db_user.password == hashlib.md5(password.encode()).hexdigest():
        if db_user.status == 1:
            # If the user is authenticated, generate an access token
            access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
            refresh_token_expires = timedelta(minutes=REFRESH_TOKEN_EXPIRE_MINUTES)
            access_token = create_access_token(db_user.email)
            refresh_token = create_refresh_token(db_user.email)
            db_user.access_token = access_token
            db.commit()
            return {"access_token": access_token, "token_type": "bearer", "token_expires":access_token_expires}
        return JSONResponse(content={"error": "Account is banned"}, status_code=403)
    return JSONResponse(content={"error": "Invalid email or password"}, status_code=404)

# @api.post("/logout")
# async def logout(request: Request):
#     response = RedirectResponse(
#         '/?success=Logged+out', 302
#     )
#     # response = RedirectResponse("/")
#     response.delete_cookie("access_token")
#     return response



@api.get("/user/profile",  tags=["Users"])
async def profile(
    request: Request,
    db: db_dependency,
    token: str = Form(None),
    ):
    if  token is None:
        return JSONResponse(content={"error": "Token not found"}, status_code=500)
    
    try:
        user = await decode_token(token, db)

        return {'user':user}
    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)



# Customer 


@api.post("/trip/store",  tags=["Customer"])
async def trip_store(
    request: Request,
    db: db_dependency,
    p_lat: str = Form(None),
    p_long: str = Form(None),
    d_lat: str = Form(None),
    d_long: str = Form(None),
    car_name: str = Form(None),
    pick_up_location: str = Form(None),
    location: str = Form(None),
    token: str = Form(None),
    ):
    if  car_name is None :
        return JSONResponse(content={"error": "Car Name is require"}, status_code=500)
    if  pick_up_location is None:
        return JSONResponse(content={"error": "Pick Up Location is requiree"}, status_code=500)
    if  location is None:
        return JSONResponse(content={"error": "Destination is required"}, status_code=500)
    if  token is None:
        return JSONResponse(content={"error": "Token not found"}, status_code=500)
    
    try:
        user = await decode_token(token, db)
        tripsAdd = models.Trips(
                user_id=user.id,
                car_name=car_name,
                p_lat=p_lat,
                p_long=p_long,
                d_lat=d_lat,
                d_long=d_long,
                pick_up_location=pick_up_location,
                location=location,
            )   
        db.add(tripsAdd)
        db.commit()
        db.refresh(tripsAdd)
        print(f"trips: {tripsAdd.car_name}")
        await sio.emit("tripList",'New Trip Store')
        return JSONResponse(content={"success": "Trips Add successfully"}, status_code=200)
    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)



@api.get("/customer/trips/get",  tags=["Customer"])
async def trips_get(request: Request,db:Annotated[Session, Depends(get_db)], token: str = Form(None)):
    try:
        user = await decode_token(token, db)
        if user.user_type==1 :
            my_trips = db.query(models.Trips).filter(models.Trips.user_id==user.id).filter(models.Trips.fare.is_(None)).order_by(models.Trips.id.desc()).all()
            return my_trips
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)


    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)


@api.get("/customer/trips/accepted",  tags=["Customer"])
async def trips_get(request: Request,db:Annotated[Session, Depends(get_db)], token: str = Form(None)):
    try:
        user = await decode_token(token, db)
        if user.user_type==1 :
            my_trips = db.query(models.Trips).join(models.Drivers).filter(models.Trips.user_id==user.id).order_by(models.Trips.id.desc()).all()
            bid_data = [(trip.driver.name) for trip in my_trips]
            return my_trips
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)

    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)



@api.get("/customer/show/bid/{id}",  tags=["Customer"])
async def bid_submit(id: int, request: Request, db: Annotated[Session, Depends(get_db)],base_url: str = base_url, token: str = Form(None)):
    try:
        user = await decode_token(token, db)
        trips = db.query(models.Trips).filter(models.Trips.id == id).first()
        return {"trips": trips, "base_url":base_url}

    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)
    

    
@api.get("/customer/bid/accept/{id}",  tags=["Customer"])
async def bid_submit(id: int, request: Request, db: Annotated[Session, Depends(get_db)], token: str = Form(None)):
    try:
        user = await decode_token(token, db)
        bid = db.query(models.Bids).filter(models.Bids.id == id).first()
        if bid.status ==1 :
            if bid is not None:
                TripAccept = db.query(models.Trips).filter(models.Trips.id == bid.trip_id).first()
                TripAccept.driver_id=bid.driver_id
                TripAccept.fare=bid.amount
                db.commit()
                db.refresh(TripAccept)
                bid.status= 0
                db.commit()
                db.refresh(bid)
                await sio.emit("TripAccept" + str(bid.trip_id), 'Trip Accepted' + str(bid.trip_id))
                return JSONResponse(content={"success": "Trip Accept successfully"}, status_code=200)
        return JSONResponse(content={"error": "Trips all ready accepted"}, status_code=403)
    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)
    

# Driver



@api.get("/driver/trips/get",  tags=["Driver"])
async def trips_get(request: Request,db:Annotated[Session, Depends(get_db)], token: str = Form(None)):
    try:
        user = await decode_token(token, db)
        trips = db.query(models.Trips).order_by(models.Trips.id.desc()).filter(models.Trips.fare.is_(None)).all()
        return {"trips": trips}
    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)
    

@api.get("/driver/accepted/trips/list",  tags=["Driver"])
async def trips_get(request: Request,db:Annotated[Session, Depends(get_db)], token: str = Form(None)):
    try:
        user = await decode_token(token, db)
        trips = db.query(models.Trips).order_by(models.Trips.id.desc()).filter(models.Trips.driver_id==user.id).all()
        return {"trips": trips}
    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)
    


@api.get("/driver/bid/show/{id}", tags=["Driver"])
async def bid_submit(id: int, request: Request, db: Annotated[Session, Depends(get_db)],base_url: str = base_url, token: str = Form(None)):
    try:
        user = await decode_token(token, db)
        if user.subscription_status == 0:
            return JSONResponse(content={"status":user.subscription_status,"error": "You are not subscribed"}, status_code=403)

        trips = db.query(models.Trips).filter(models.Trips.id == id).first()
        subscription_check = await subscription_validity(user,db)

        if subscription_check == 1:
            return JSONResponse(content={"status":subscription_check,"error": "Your subscribed validity expired"}, status_code=403)
        return {"trips": trips}
    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)



@api.get("/bid/get/{id}", tags=["Driver"])
async def trips_get(id: int,request: Request,db:Annotated[Session, Depends(get_db)],token: str = Form(None)):
    try:
        user = await decode_token(token, db)
       
        bids = db.query(models.Bids)\
            .join(models.Drivers, models.Bids.driver_id == models.Drivers.id)\
            .join(models.Trips, models.Bids.trip_id == models.Trips.id)\
            .filter(models.Bids.trip_id == id)\
            .all()
        bid_data = [(bid.id, bid.amount, bid.driver.name) for bid in bids]
        trip_data = [(bid.id, bid.amount, bid.trip.fare) for bid in bids]
        return {'bids': bids, 'user': user}
    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)




@api.post("/driver/bid-submit/{id}", tags=["Driver"])
async def bid_store(
    id: int,
    request: Request,
    db: Annotated[Session, Depends(get_db)],
    amount: int = Form(None),
    token: str = Form(None)
    ):
    if  amount is None:
        return JSONResponse(content={"error": "Amount is required"}, status_code=403)
    try:
        user = await decode_token(token, db)
        if user.subscription_status == 0:
            return JSONResponse(content={"status":user.subscription_status,"error": "You are not subscribed"}, status_code=403)
        subscription_check = await subscription_validity(user,db)
        if subscription_check == 1:
            return JSONResponse(content={"status":subscription_check,"error": "Your subscribed validity expired"}, status_code=403)
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
        return JSONResponse(content={"success": "Bid submit successfully"}, status_code=200)
    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)




@api.get("/driver/package", tags=["Driver"])
async def driver_package(request: Request, db: db_dependency,base_url: str = base_url,token: str = Form(None)):
    try:
        user = await decode_token(token, db)
        package = db.query(models.DriverSubscriptions).filter(models.DriverSubscriptions.status == 1).all()
        return {'package': package, 'user': user}
    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)
    


    
@api.get("/driver/package/purchase/{id}", tags=["Driver"])
async def update_driver_endpoint(
    request: Request,
    db:db_dependency,
    id: int,
    token: str = Form(None)):
    try:
        user = await decode_token(token, db)
        package = db.query(models.DriverSubscriptions).filter(models.DriverSubscriptions.id == id).first()
        driver = db.query(models.Drivers).filter(models.Drivers.id == user.id).first()
        print(f"date: {id}")
        driver.subscription_id = package.id
        driver.subscription_status = 1
        driver.subscription_at = datetime.now()
        db.commit()
        return JSONResponse(content={"success": "Driver subscription successfully"}, status_code=200)
    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)
    

