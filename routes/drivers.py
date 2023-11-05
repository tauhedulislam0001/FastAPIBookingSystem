from fastapi import FastAPI, Request, HTTPException, Form,APIRouter,Depends
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse,JSONResponse
from fastapi.staticfiles import StaticFiles
from core.utils import decode_token,TokenDecodeError
from typing import Annotated
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base,get_db
import models

driver = APIRouter()

templates = Jinja2Templates(directory="templates")

@driver.get("/driver")
async def read_root(request: Request,db:Annotated[Session, Depends(get_db)]):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    error_driver = request.query_params.get("error_driver")
    error_customer = request.query_params.get("error_customer")
    success_customer = request.query_params.get("success_customer")
    success_driver = request.query_params.get("success_driver")
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        if user.user_type==2 :
            return templates.TemplateResponse("driver_trip_list.html", {"user": user,"request": request,"error": error, "success": success, "error_driver": error_driver, "success_customer": success_customer, "error_customer": error_customer, "success_driver": success_driver})
        return RedirectResponse("/?error=You+are+not+authorized",302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)

@driver.get("/trips/get")
async def trips_get(request: Request,db:Annotated[Session, Depends(get_db)]):
    trips = db.query(models.Trips).order_by(models.Trips.id.desc()).all()
    return trips

@driver.get("/bid/submit/{id}")
async def bid_submit(id: int, request: Request, db: Annotated[Session, Depends(get_db)]):
    trips_by_id = db.query(models.Trips).filter(models.Trips.id == id).first()
    # Example: trips = db.query(models.Trips).filter(models.Trips.id == id).all()
    return {"id": trips_by_id}