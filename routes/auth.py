from fastapi import FastAPI, Request, HTTPException, Form, APIRouter, Depends, UploadFile, File, status
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse, Response
from database import engine, SessionLocal, Base
from datetime import datetime, timedelta, timezone
import pytz
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
import models
from sqlalchemy.orm import Session
from typing import Annotated, Optional
from core.helper import insert_image, get_user_by_email
from core.utils import create_access_token, create_refresh_token

from pydantic import BaseModel
import hashlib
from jose import JWTError, jwt
import secrets
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from database import get_db
templates = Jinja2Templates(directory="templates")

from core.utils import ACCESS_TOKEN_EXPIRE_MINUTES, REFRESH_TOKEN_EXPIRE_MINUTES

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
        return RedirectResponse("/?error=Passwords+do+not+match", 302)
    existing_user = await get_user_by_email(email, db, models.Customers)
    if existing_user:
        return RedirectResponse("/?error=Email+already+exists", 302)
    # hashed_password = pwd_context.hash(password)
    hashed_password = hashlib.md5(password.encode()).hexdigest()
    dir = "templates/assets/upload/profile/"
    filename = await insert_image(image, dir)
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
    return RedirectResponse("/?success=Customer+Registration+successfully", 302)


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
        return RedirectResponse("/?error=Passwords+do+not+match", 302)
    existing_user = await get_user_by_email(email, db, models.Drivers)
    if existing_user:
        return RedirectResponse("/?error=Email+already+exists", 302)
    # hashed_password = pwd_context.hash(password)
    hashed_password = hashlib.md5(password.encode()).hexdigest()

    dir = "templates/assets/upload/profile/"
    filename = await insert_image(image, dir)
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
    return RedirectResponse("/?success=Driver+Registration+successfully", 302)


# login user
@router.post("/driver-login", status_code=status.HTTP_200_OK, tags=["Authentication"])
async def customer_login_user(
        db: db_dependency,
        email: str = Form(...),
        password: str = Form(...)):
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
            print(f"db_user:{db_user}")
            response = RedirectResponse("/?success=Login+successfully", 302)
            response.set_cookie(key="access_token", value=access_token, expires=access_token_expires)
            response.set_cookie(key="refresh_token", value=refresh_token, expires=refresh_token_expires)
            return response

            # return {
            # "access_token": create_access_token(db_user.email),
            # "refresh_token": create_refresh_token(db_user.email),}
        return RedirectResponse("/?error=Account+is+banned", 302)
    return RedirectResponse("/?error=Invalid+username+or+password", 302)


# login user
@router.post("/customer-login", status_code=status.HTTP_200_OK, tags=["Authentication"])
async def drover_login_user(
        db: db_dependency,
        email: str = Form(...),
        password: str = Form(...)):
    db_user = db.query(models.Customers).filter(models.Customers.email == email).first()
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
            print(f"db_user:{db_user}")
            response = RedirectResponse("/?success=Login+successfully", 302)
            response.set_cookie(key="access_token", value=access_token, expires=access_token_expires)
            response.set_cookie(key="refresh_token", value=refresh_token, expires=refresh_token_expires)
            return response
            # Return the token in the response
            # return {"access_token": access_token, "token_type": "bearer", "user_type":1}
        return RedirectResponse("/?error=Account+is+banned", 302)
    return RedirectResponse("/?error=Invalid+username+or+password", 302)
    # raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid username or password")


# # logout
# @router.post('/driver-logout', status_code=status.HTTP_101_SWITCHING_PROTOCOLS, tags=["Authentication"])
# async def logout_user(user:  models.CustomerLogin, db: db_dependency):
#     db_user = db.query(models.User).filter(models.User.username == user.username).first()
#     db_user.access_token = None
#     db.commit()
#     return {"message":"User logged out successfully"}


# @router.post('/customer-logout', status_code=status.HTTP_101_SWITCHING_PROTOCOLS, tags=["Authentication"])
# async def logout_user(user:  models.DriverLogin, db: db_dependency):
#     db_user = db.query(models.User).filter(models.User.username == user.username).first()
#     db_user.access_token = None
#     db.commit()
#     return {"message":"User logged out successfully"}

@router.post("/logout")
async def logout(request: Request):
    response = RedirectResponse(
        '/?success=Logged+out', 302
    )
    # response = RedirectResponse("/")
    response.delete_cookie("access_token")
    return response
