from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.responses import HTMLResponse, RedirectResponse, Response,JSONResponse
from pydantic import BaseModel
import models
from database import engine, SessionLocal, Base
from sqlalchemy.orm import Session
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from sqlalchemy import Column, Integer , String
# from sqlalchemy.orm import mapped_column
from sqlalchemy.ext.declarative import declarative_base
import routes.auth
import routes.drivers
import routes.customers
import routes.admins
from jose import JWTError, jwt
from core.utils import ALGORITHM, JWT_SECRET_KEY, decode_token, TokenDecodeError
from core.helper import get_user_by_email

Base = declarative_base()
from typing import Annotated

app = FastAPI()
models.Base.metadata.create_all(bind=engine)
templates = Jinja2Templates(directory="templates")
app.mount("/assets", StaticFiles(directory="templates/assets"), name="assets")
app.mount("/admin/assets", StaticFiles(directory="templates/admin/assets"), name="admin-assets")
app.include_router(routes.auth.router)
app.include_router(routes.admins.admin)
from middleware.CheckUser import UserCheck
# Start Socket 
from core.socket_manager import get_socketio_asgi_app
from core.socket_io import sio

sio_asgi_app = get_socketio_asgi_app(app)
app.add_route("/socket.io/", route=sio_asgi_app, methods=["GET", "POST"])
app.add_websocket_route("/socket.io/", sio_asgi_app)


# End Sokcet

app.include_router(routes.drivers.driver)
app.include_router(routes.customers.customer)


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
    subscription_status = mapped_column(Integer)
    created_at = mapped_column(String)    
    

class DriverSubscriptions(Base):
    __tablename__ = "driver_subscriptions"
    
    
    id = Column(Integer, primary_key=True, index=True)
    driver_id = mapped_column(Integer)
    package_duration = mapped_column(String)
    amount = mapped_column(Integer)
    validity = mapped_column(String)
    status = mapped_column(Integer)
    created_at = mapped_column(String)


class Trips(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)
    user_id = mapped_column(Integer)
    driver_id = mapped_column(Integer)
    car_name = mapped_column(String)
    location = mapped_column(String)
    pick_up_location = mapped_column(String)
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


def get_db() -> Session:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]

@app.exception_handler(404)
async def custom_404_handler(request, __):
    return templates.TemplateResponse("404.html",{"request": request})

@app.exception_handler(500)
async def custom_404_handler(request, __):
    return templates.TemplateResponse("500.html",{"request": request})

@app.get("/")
async def read_root(request: Request, db: db_dependency):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    
    try:
        user = await decode_token(token, db)
        return templates.TemplateResponse("index.html", {"user": user, "request": request, "error": error, "success": success})
    except TokenDecodeError as e:
        return templates.TemplateResponse("index.html", {"request": request, "error": error, "success": success})


@app.get("/ip")
def read_root(request: Request):
    domain = request.base_url
    path = request.url.path

    return {"domain": domain, "path": path}

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
