from fastapi import FastAPI, Request, HTTPException, Form,APIRouter,Depends,UploadFile,File
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
from datetime import date

router = APIRouter()

templates = Jinja2Templates(directory="templates")
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

IMAGEDIR = "templates/assets/upload/profile/"

db_dependency = Annotated[Session, Depends(get_db)]

async def get_user_by_email(email: str, db):
    user = db.query(models.Customers).filter(models.Customers.email == email).first()
    return user


@router.post("/customer/register/submit")
async def register(
    db: db_dependency,
    name: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    confirm_password: str = Form(...),
    image: UploadFile = File(...),
):
    currentDate = date.today()
    if password != confirm_password:
        return RedirectResponse("/?error=Passwords+do+not+match")
    existing_user = await get_user_by_email(email,db)
    if existing_user:
        return RedirectResponse("/?error=Email+already+exists")
    hashed_password = pwd_context.hash(password)
    contents = await image.read()
    filename=f'{currentDate}' +image.filename 
    with open(f"{IMAGEDIR}{filename}", "wb") as f:
        f.write(contents)

    register = models.Customers(
        name=name,
        email=email,
        password=hashed_password,
        image=filename, 
    )   
    db.add(register)
    db.commit()
    db.refresh(register)
    return RedirectResponse("/?success=Registration+successfully")

@router.post("/logout")
async def logout(request: Request):
    response = RedirectResponse("/?success=Logged+out")
    response.delete_cookie("session_token")
    return response