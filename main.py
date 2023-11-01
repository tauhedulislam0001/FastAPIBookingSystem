from fastapi import FastAPI, HTTPException, Depends,Request
from pydantic import BaseModel
from typing import Annotated
import models
from database import engine, SessionLocal,Base
from sqlalchemy.orm import Session
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


app = FastAPI()
models.Base.metadata.create_all(bind=engine)
templates = Jinja2Templates(directory="templates")
app.mount("/assets", StaticFiles(directory="templates/assets"), name="assets")


class Customers(Base):
    __tablename__ = "customers"
    
    
    user_type : int
    name : str 
    email : str 
    password : str 
    access_token : str 
    refresh_token : str 
    image : str 
    status : str 
    created_at : str 
    
    
class Drivers(Base):
    __tablename__ = "drivers"


    user_type : int 
    name : str 
    email : str 
    password : str 
    access_token : str 
    refresh_token : str 
    image : str 
    status : int 
    created_at : str 
    

class Trips(Base):
    __tablename__ = "trips"


    user_id : int 
    driver_id : int 
    car_name : str 
    location : str 
    fare : str 
    status : int 
    created_at : str 
    
    

class Bids(Base):
    __tablename__ = "bids"
    
    id : int 
    trip_id : int 
    driver_id : int 
    amount : int 
    status : int 
    created_at : int 
    
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        

db_dependency = Annotated[Session, Depends(get_db)]


@app.route("/", methods=["GET", "POST"])
async def read_root(request: Request):
    error_message = request.query_params.get("error")
    success_message = request.query_params.get("success")
    return templates.TemplateResponse("index.html", {"request": request, "error": error_message, "success":success_message})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)