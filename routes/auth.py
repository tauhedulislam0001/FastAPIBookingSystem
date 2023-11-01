from fastapi import FastAPI, Request, HTTPException, Form,APIRouter,Depends,UploadFile,File
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse,Response
from database import engine, SessionLocal, Base
from datetime import datetime, timedelta, timezone
import pytz
from passlib.context import CryptContext
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

router = APIRouter()

templates = Jinja2Templates(directory="templates")
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

IMAGEDIR = "templates/assets/upload/profile/"

db_dependency = Depends(get_db)

async def get_user_by_email(email):
    query = "SELECT * FROM users WHERE email = :email"
    user =await engine.fetch_one(query=query, values={"email": email})
    return user 

@router.post("/customer/register/submit")
async def register(
    name: str = Form(...),
    password: str = Form(...),
    confirm_password: str = Form(...),
    email: str = Form(...),
    file: UploadFile = File(...),
):
    if password != confirm_password:
        return RedirectResponse("/?error=Passwords+do+not+match")
    
    existing_user = await get_user_by_email(email)
    if existing_user:
        return RedirectResponse("/?error=Email+already+exists")
    hashed_password = pwd_context.hash(password)
    contents = await file.read()

    with open(f"{IMAGEDIR}{file.filename}", "wb") as f:
        f.write(contents)
    filename=file.filename
    print(filename)
    query = "INSERT INTO customers (name, password, email,'image') VALUES (:username, :password, :email,:filename)"
    values = {"username": name, "password": hashed_password, "email": email,"image":filename}
    await engine.execute(query=query, values=values)
    return RedirectResponse("/?success=Registration+successfully")

@router.post("/logout")
async def logout(request: Request):
    response = RedirectResponse("/?success=Logged+out")
    response.delete_cookie("session_token")
    return response