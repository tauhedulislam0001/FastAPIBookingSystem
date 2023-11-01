from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from database import Base

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

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
