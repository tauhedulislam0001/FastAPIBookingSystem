from fastapi import FastAPI, Request, HTTPException, Form,APIRouter,Depends,UploadFile,File,status
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse,Response
from database import engine, SessionLocal, Base
from datetime import datetime, timedelta, timezone
import pytz
from passlib.context import CryptContext
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
import models
from sqlalchemy.orm import Session
from typing import Annotated, Optional
from core.helper import insert_image,get_user_by_email

from pydantic import BaseModel
import hashlib
from jose import JWTError, jwt
import secrets
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.security import OAuth2PasswordBearer
templates = Jinja2Templates(directory="templates")

SECRET_KEY = secrets.token_hex(32)  # Generate a random secret key with 32 bytes
ALGORITHM = "HS256" # The algorithm used to sign the tokens
ACCESS_TOKEN_EXPIRE_MINUTES = 30  # Token expiration time in minutes


router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]



@router.post("/customer/register/submit")
async def register(
    db: db_dependency,
    name: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    confirm_password: str = Form(...),
    image: UploadFile = File(...),
):
    if password != confirm_password:
        return RedirectResponse("/?success_customer=Passwords+do+not+match")
    existing_user = await get_user_by_email(email,db,models.Customers)
    if existing_user:
        return RedirectResponse("/?success_customer=Email+already+exists")
    # hashed_password = pwd_context.hash(password)
    hashed_password = hashlib.md5(password.encode()).hexdigest()
    dir = "templates/assets/upload/profile/"
    filename = await insert_image(image, dir)
    print (f"file:{filename}")
    register = models.Customers(
        name=name,
        email=email,
        password=hashed_password,
        image=filename, 
    )   
    db.add(register)
    db.commit()
    db.refresh(register)
    return RedirectResponse("/?success_customer=Customer+Registration+successfully")


@router.post("/driver/register/submit")
async def driver_register(
    db: db_dependency,
    name: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    confirm_password: str = Form(...),
    image: UploadFile = File(...),
):
    if password != confirm_password:
        return RedirectResponse("/?error_driver=Passwords+do+not+match")
    existing_user = await get_user_by_email(email,db,models.Drivers)
    if existing_user:
        return RedirectResponse("/?error_driver=Email+already+exists")
    # hashed_password = pwd_context.hash(password)
    hashed_password = hashlib.md5(password.encode()).hexdigest()

    dir = "templates/assets/upload/profile/"
    filename = await insert_image(image, dir)
    print (f"file:{filename}")
    register = models.Drivers(
        name=name,
        email=email,
        password=hashed_password,
        image=filename, 
    )   
    db.add(register)
    db.commit()
    db.refresh(register)
    return RedirectResponse("/?success_driver=Driver+Registration+successfully")




# create login system
def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)  # Default expiration time
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


#login user
@router.post("/driver-login", status_code=status.HTTP_200_OK, tags=["Authentication"])
async def login_user(user: models.DriverLogin, db:db_dependency):
    db_user = db.query(models.User).filter(models.User.username == user.username).first()
    if db_user and db_user.password == hashlib.md5(user.password.encode()).hexdigest():
        if db_user.status == 1:
                # If the user is authenticated, generate an access token
                access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
                access_token = create_access_token(data={"sub": user.username}, expires_delta=access_token_expires)
                
                # Update the access token in the database
                db_user = db.query(models.User).filter(models.User.username == user.username).first()
                db_user.access_token = access_token
                db.commit()
                
                # Return the token in the response
                return {"access_token": access_token, "token_type": "bearer", "user_type":1}
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Account is banned")
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid username or password")


#login user
@router.post("/customer-login", status_code=status.HTTP_200_OK, tags=["Authentication"])
async def login_user(user:  models.CustomerLogin, db:db_dependency):
    db_user = db.query(models.User).filter(models.User.username == user.username).first()
    if db_user and db_user.password == hashlib.md5(user.password.encode()).hexdigest():
        if db_user.status == 1:
                # If the user is authenticated, generate an access token
                access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
                access_token = create_access_token(data={"sub": user.username}, expires_delta=access_token_expires)
                
                # Update the access token in the database
                db_user = db.query(models.User).filter(models.User.username == user.username).first()
                db_user.access_token = access_token
                db.commit()
                
                # Return the token in the response
                return {"access_token": access_token, "token_type": "bearer", "user_type":1}
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Account is banned")
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid username or password")


# logout
@router.post('/driver-logout', status_code=status.HTTP_101_SWITCHING_PROTOCOLS, tags=["Authentication"])
async def logout_user(user:  models.CustomerLogin, db: db_dependency):
    db_user = db.query(models.User).filter(models.User.username == user.username).first()
    db_user.access_token = None
    db.commit()
    return {"message":"User logged out successfully"}


@router.post('/customer-logout', status_code=status.HTTP_101_SWITCHING_PROTOCOLS, tags=["Authentication"])
async def logout_user(user:  models.DriverLogin, db: db_dependency):
    db_user = db.query(models.User).filter(models.User.username == user.username).first()
    db_user.access_token = None
    db.commit()
    return {"message":"User logged out successfully"}
