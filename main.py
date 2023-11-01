from fastapi import FastAPI, HTTPException, Depends, Request
from pydantic import BaseModel
import models
from database import engine, SessionLocal, Base
from sqlalchemy.orm import Session
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import mapped_column 
from sqlalchemy.ext.declarative import declarative_base
import routes.auth

Base = declarative_base()

app = FastAPI()
models.Base.metadata.create_all(bind=engine)
templates = Jinja2Templates(directory="templates")
app.mount("/assets", StaticFiles(directory="templates/assets"), name="assets")
app.include_router(routes.auth.router)


class Customers(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True, index=True)
    user_type = mapped_column(Integer)
    name = mapped_column(String)
    email = mapped_column(String)
    password = mapped_column(String)
    access_token = mapped_column(String)
    refresh_token = mapped_column(String)
    image = mapped_column(String)
    status = mapped_column(String)
    created_at = mapped_column(String)


class Drivers(Base):
    __tablename__ = "drivers"

    id = Column(Integer, primary_key=True, index=True)
    user_type = mapped_column(Integer)
    name = mapped_column(String)
    email = mapped_column(String)
    password = mapped_column(String)
    access_token = mapped_column(String)
    refresh_token = mapped_column(String)
    image = mapped_column(String)
    status = mapped_column(Integer)
    created_at = mapped_column(String)


class Trips(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)
    user_id = mapped_column(Integer)
    driver_id = mapped_column(Integer)
    car_name = mapped_column(String)
    location = mapped_column(String)
    fare = mapped_column(String)
    status = mapped_column(Integer)
    created_at = mapped_column(String)


class Bids(Base):
    __tablename__ = "bids"

    id = Column(Integer, primary_key=True, index=True)
    trip_id = mapped_column(Integer)
    driver_id = mapped_column(Integer)
    amount = mapped_column(Integer)
    status = mapped_column(Integer)
    created_at = mapped_column(Integer)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Depends(get_db)


@app.route("/", methods=["GET", "POST"])
async def read_root(request: Request):
    error_driver = request.query_params.get("error_driver")
    error_customer = request.query_params.get("error_customer")
    success_customer = request.query_params.get("success_customer")
    success_driver = request.query_params.get("success_driver")
    return templates.TemplateResponse("index.html", {"request": request, "error_driver": error_driver, "success_customer": success_customer, "error_customer": error_customer, "success_driver": success_driver})


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
