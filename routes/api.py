from fastapi import FastAPI, Request, HTTPException, Form, APIRouter, Depends, UploadFile, File, status
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse, Response,JSONResponse
from database import engine, SessionLocal, Base,db_dependency,base_url
from datetime import datetime, timedelta, timezone
import pytz
from passlib.context import CryptContext
from core.utils import decode_token,TokenDecodeError
from core.bkash import process_token_request,credentials

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
import models
from sqlalchemy.orm import Session
from typing import Annotated, Optional
from core.helper import insert_image, get_user_by_email,subscription_validity,validate_phone_number,get_user
from core.utils import create_access_token, create_refresh_token
from core.otp import otp_send,verify_otp

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
async def driver_login_user(db: db_dependency,phone_no: str = Form(None)):
    if  phone_no is None:
        return JSONResponse(content={"error": "Phone Number is required"}, status_code=500)
    customer =await get_user(phone_no,db,models.Customers)
    if customer is not None:
        return {"message": "Your number already exist as a customer"}
    validate_phone_number_check=validate_phone_number(phone_no)
    if validate_phone_number_check !=1:
        return validate_phone_number_check
    db_user = db.query(models.Drivers).filter(models.Drivers.phone_no == phone_no).first()
    user='Garibook Driver'
    if db_user is not None and db_user.status == 1:
        send_no=db_user.phone_no
        
    else:
        register = models.Drivers(
            phone_no=phone_no,
        )
        db.add(register)
        db.commit()
        db.refresh(register)
        send_no=register.phone_no

    if send_no is not None:
        sms_response=await otp_send(send_no,user,db)
        print(sms_response)
        if "code" in sms_response and "error" in sms_response:
            sms_code = sms_response["code"]
            sms_error = sms_response["error"]
            return {"message": f"SMS sending failed. Code: {sms_code}, Error: {sms_error}"}
        elif "code" in sms_response and "ref_id" in sms_response:
            sms_code = sms_response["code"]
            sms_error = sms_response["ref_id"]
            if sms_code == "1":
                return {"message": "SMS sent successfully"}
            else:
                return {"message": f"SMS sending failed. Code: {sms_code}, Error: {sms_error}"}
        else:
            return {"message": "Invalid response from SMS service"}
    else:
        return {"message": "Invalid Phone Number"}



@api.post("/customer-login", status_code=status.HTTP_200_OK, tags=["Authentication"])
async def customer_login_user(db: db_dependency,phone_no: str = Form(None)):
    if  phone_no is None:
        return JSONResponse(content={"error": "Phone Number is required"}, status_code=500)
    driver =await get_user(phone_no,db,models.Drivers)
    if driver is not None:
        return {"message": "Your number already exist as a driver"}
    validate_phone_number_check=validate_phone_number(phone_no)
    if validate_phone_number_check !=1:
        return validate_phone_number_check
    db_user = db.query(models.Customers).filter(models.Customers.phone_no == phone_no).first()
    user='Garibook User'
    if db_user is not None and db_user.status == 1:
        send_no=db_user.phone_no
        
    else:
        register = models.Customers(
            phone_no=phone_no,
        )
        db.add(register)
        db.commit()
        db.refresh(register)
        send_no=register.phone_no

    if send_no is not None:
        sms_response=await otp_send(send_no,user,db)
        if "code" in sms_response and "error" in sms_response:
            sms_code = sms_response["code"]
            sms_error = sms_response["error"]
            return {"message": f"SMS sending failed. Code: {sms_code}, Error: {sms_error}"}
        elif "code" in sms_response and "ref_id" in sms_response:
            sms_code = sms_response["code"]
            sms_error = sms_response["ref_id"]
            if sms_code == "1":
                return {"message": "SMS sent successfully"}
            else:
                return {"message": f"SMS sending failed. Code: {sms_code}, Error: {sms_error}"}
        else:
            return {"message": "Invalid response from SMS service"}
    else:
        return {"message": "Invalid Phone Number"}

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
        payment_method=request.query_params.get("method")
        if package is not None==1:
            if package.status==1:
                if payment_method is not None:
                    if payment_method =='bkash':
                        print(package.status)
                        print(package.amount)
                        result = await process_token_request(credentials,amount=f"{package.amount}",reference='package_subscription',pay_id=id)
                        return result
                else:
                    return JSONResponse(content={"error": "Payment error"}, status_code=404)
            else:
                return JSONResponse(content={"error": "Pacakge not available"}, status_code=404)
        else:
            return JSONResponse(content={"error": "Pacakge not found"}, status_code=404)
        # return JSONResponse(content={"success": "Driver subscription successfully"}, status_code=200)
    except TokenDecodeError as e:
        return JSONResponse(content={"error": "You are not authorized"}, status_code=403)
    



@api.post("/otp-verify", status_code=status.HTTP_200_OK, tags=["Authentication"])
async def verify_otp_send(
    db:db_dependency,
    otp1: str = Form(...),
    otp2: str = Form(...),
    otp3: str = Form(...),
    otp4: str = Form(...),
    phone_no: str = Form(None),
    email: str = Form(None),
):
    otp_verify=await verify_otp(db,otp1,otp2,otp3,otp4,phone_no,email)
    return otp_verify



@api.post("/driver/profile/update")
async def profile_update(
    request: Request,
    db:db_dependency,
    token:str = Form(...),
    email:str = Form(...),
    nid_no:str = Form(...),
    nid_image: UploadFile = File(None),
    gender:str = Form(...),
    date_of_birth:str = Form(...),
    name:str = Form(...),
    image: UploadFile = File(None),
    ):
    
    if  name is None :
        return JSONResponse(content={"error": "Name is require"}, status_code=500)
    if  email is None:
        return JSONResponse(content={"error": "Email is required"}, status_code=500)
    if  nid_no is None:
        return JSONResponse(content={"error": "Nid no is require"}, status_code=500)
    if  nid_image is None:
        return JSONResponse(content={"error": "NID image is required"}, status_code=500)
    if  image is None:
        return JSONResponse(content={"error": "Image is required"}, status_code=500)
    if gender is None:
        return JSONResponse(content={"error": "Gender is required"}, status_code=500)
    if date_of_birth is None:
        return JSONResponse(content={"error": "Date of birth is required"}, status_code=500)
    
    try:
        user = await decode_token(token, db)
        driver = db.query(models.Drivers).filter(models.Drivers.id == user.id).first()       
        driver.email = email
        driver.nid_no = nid_no
        driver.gender = gender
        driver.date_of_birth = date_of_birth
        driver.name = name
        
        niddir = "templates/assets/upload/nid/"
        nidfilename = await insert_image(nid_image, niddir)
        
        if nidfilename is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{nidfilename}")
        
        dir = "templates/assets/upload/profile/"
        filename = await insert_image(image, dir)

        
        if filename is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{filename}")
        
        driver.nid_image = nidfilename
        driver.image = filename
        db.commit()
        return JSONResponse(content={"success": "Profile updated successfully"}, status_code=200)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",401)
    
    
    
@api.post("/driver/driving/license")
async def profile_update(
    request: Request,
    db:db_dependency,
    token:str = Form(...),
    license_no :str = Form(...),
    exp_date :str = Form(...),
    experience :str = Form(...),
    image_front:UploadFile = File(None),
    image_back:UploadFile = File(None),
    ):
    
    if  license_no is None :
        return JSONResponse(content={"error": "license no is require"}, status_code=500)
    if  exp_date is None:
        return JSONResponse(content={"error": "Expire date is required"}, status_code=500)
    if  experience is None:
        return JSONResponse(content={"error": "Experience no is require"}, status_code=500)
    if  image_front is None:
        return JSONResponse(content={"error": "Image front image is required"}, status_code=500)
    if  image_back is None:
        return JSONResponse(content={"error": "Image back is required"}, status_code=500)
    
    try:
        user = await decode_token(token, db)
        
        fimagedir = "templates/assets/upload/driving_license/"
        fimagefilename = await insert_image(image_front, fimagedir)
        
        bimagedir = "templates/assets/upload/driving_license/"
        bimagefilename = await insert_image(image_back, bimagedir)
        
        if fimagefilename is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{fimagefilename}")
        
        if bimagefilename is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{bimagefilename}")
        
        driving_license = models.DrivingLicense(
            driver_id = user.id,
            license_no = license_no,
            exp_date = exp_date,
            experience = experience,
            image_front = fimagefilename,
            image_back = bimagefilename,
            created_by = user.id
        )
        print(driving_license)
        db.add(driving_license)
        db.commit()
        db.refresh(driving_license)
        return JSONResponse(content={"success": "driving license updated successfully"}, status_code=200)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",401)
    
    
@api.post("/driver/car/add")
async def profile_update(
    request: Request,
    db:db_dependency,
    token:str = Form(...),
    car_type:str = Form(...),
    car_number:str = Form(...),
    ac_status: int = Form(...),
    transmission_type: int = Form(...),
    car_image:UploadFile = File(None),
    ):
    
    if  car_type is None :
        return JSONResponse(content={"error": "Car type is require"}, status_code=500)
    if  car_number is None:
        return JSONResponse(content={"error": "Car number is required"}, status_code=500)
    if  ac_status is None:
        return JSONResponse(content={"error": "Ac status is require"}, status_code=500)
    if  transmission_type is None:
        return JSONResponse(content={"error": "Transmission type is required"}, status_code=500)
    if  car_image is None:
        return JSONResponse(content={"error": "Car image is required"}, status_code=500)
    
    try:
        user = await decode_token(token, db)
        
        carimagedir = "templates/assets/upload/car_image/"
        carimagefilename = await insert_image(car_image, carimagedir)
        
        if carimagefilename is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{carimagefilename}")
        
        car = models.Car(
            driver_id = user.id,
            car_type = car_type,
            car_number = car_number,
            ac_status = ac_status,
            transmission_type = transmission_type,
            car_image = carimagefilename,
        )
        print(car)
        db.add(car)
        db.commit()
        db.refresh(car)
        return JSONResponse(content={"success": "car has been updated successfully"}, status_code=200)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",401)
    

@api.post("/driver/car/information")
async def profile_update(
    request: Request,
    db:db_dependency,
    token:str = Form(...),
    car_model:str = Form(...),
    model_year:int = Form(...),
    registration_p_front:UploadFile = File(None),
    registration_p_back:UploadFile = File(None),
    car_color:str = Form(...),
    fuel_type:int = Form(...),
    ):
    
    if  car_model is None :
        return JSONResponse(content={"error": "Car model type is require"}, status_code=500)
    if  model_year is None:
        return JSONResponse(content={"error": "Model year is required"}, status_code=500)
    if  registration_p_front is None:
        return JSONResponse(content={"error": "Registration front image is require"}, status_code=500)
    if  registration_p_back is None:
        return JSONResponse(content={"error": "Registration back image is required"}, status_code=500)
    if  car_color is None:
        return JSONResponse(content={"error": "Car color is required"}, status_code=500)
    if  fuel_type is None:
        return JSONResponse(content={"error": "Fuel type is required"}, status_code=500)
    
    try:
        user = await decode_token(token, db)
        
        registrationfrontimage = "templates/assets/upload/car_registration_image/"
        frontimage = await insert_image(registration_p_front, registrationfrontimage)
        
        if registrationfrontimage is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{registrationfrontimage}")
        
        registrationbackimage = "templates/assets/upload/car_registration_image/"
        backimage = await insert_image(registration_p_back, registrationbackimage)
        
        if backimage is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{backimage}")
        
        car = models.CarInformation(
            driver_id = user.id,
            car_model = car_model,
            model_year = model_year,
            car_color = car_color,
            fuel_type = fuel_type,
            registration_p_front = frontimage,
            registration_p_back = backimage,
        )
        print(car)
        db.add(car)
        db.commit()
        db.refresh(car)
        return JSONResponse(content={"success": "car information has been updated successfully"}, status_code=200)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",401)
    
    
@api.post("/driver/car/images/update")
async def profile_update(
    request: Request,
    db:db_dependency,
    token:str = Form(...),
    car_info_id:int = Form(...),
    front_image:UploadFile = File(None),
    back_image:UploadFile = File(None),
    right_side_image:UploadFile = File(None),
    left_side_image:UploadFile = File(None),
    inside_front:UploadFile = File(None),
    inside_back:UploadFile = File(None),
    ):
    
    if  car_info_id is None :
        return JSONResponse(content={"error": "Car information id is require"}, status_code=500)
    if  front_image is None:
        return JSONResponse(content={"error": "Front image is required"}, status_code=500)
    if  back_image is None:
        return JSONResponse(content={"error": "Back image  is require"}, status_code=500)
    if  right_side_image is None:
        return JSONResponse(content={"error": "Right side image is required"}, status_code=500)
    if  left_side_image is None:
        return JSONResponse(content={"error": "Left side image is required"}, status_code=500)
    if  inside_front is None:
        return JSONResponse(content={"error": "Inside front image is required"}, status_code=500)
    if  inside_back is None:
        return JSONResponse(content={"error": "Inside back image is required"}, status_code=500)
    
    try:
        user = await decode_token(token, db)
        
        front_image_dir = "templates/assets/upload/car_image_update/"
        frontimagename = await insert_image(front_image, front_image_dir)
        
        if front_image_dir is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{front_image_dir}")
        
        back_image_dir = "templates/assets/upload/car_image_update/"
        back_image_name = await insert_image(back_image, back_image_dir)
        
        if back_image_dir is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{back_image_dir}")
        
        right_side_image_dir = "templates/assets/upload/car_image_update/"
        right_side_name = await insert_image(right_side_image, right_side_image_dir)
        
        if right_side_image_dir is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{right_side_image_dir}")
        
        left_side_image_dir = "templates/assets/upload/car_image_update/"
        left_side_image_name = await insert_image(left_side_image, left_side_image_dir)
        
        if left_side_image_dir is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{left_side_image_dir}")
        
        inside_front_dir = "templates/assets/upload/car_image_update/"
        inside_front_name = await insert_image(inside_front, inside_front_dir)
        
        if inside_front_dir is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{inside_front_dir}")
        
        inside_back_dir = "templates/assets/upload/car_image_update/"
        inside_back_name = await insert_image(inside_back, inside_back_dir)
        
        if inside_back_dir is None:
            return JSONResponse(content={"error": "Invalid file type. Only jpg, png, jpeg, and webp are allowed"}, status_code=500)
        print(f"file:{inside_back_dir}")
        
        car = models.CarImages(
            car_info_id = car_info_id,
            front_image = frontimagename,
            back_image = back_image_name,
            right_side_image = right_side_name,
            left_side_image = left_side_image_name,
            inside_front = inside_front_name,
            inside_back = inside_back_name,
        )
        print(car)
        db.add(car)
        db.commit()
        db.refresh(car)
        return JSONResponse(content={"success": "car images has been updated successfully"}, status_code=200)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",401)