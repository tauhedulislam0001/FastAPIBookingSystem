from fastapi import FastAPI, Request, HTTPException, Form, APIRouter, Depends, UploadFile, File, status
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse, Response,JSONResponse
from database import engine, SessionLocal, Base,db_dependency
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

api = APIRouter(prefix="/api/v1")
templates = Jinja2Templates(directory="templates")



# Auth API


@api.post("/customer/register/submit")
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



@api.post("/driver/register/submit")
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

