from fastapi import FastAPI, Request, HTTPException, Form,APIRouter,Depends
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse,JSONResponse
from fastapi.staticfiles import StaticFiles
from core.utils import decode_token,TokenDecodeError
from typing import Annotated
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base,get_db,base_url, db_dependency
import models
from datetime import datetime, timedelta


trips = APIRouter(include_in_schema=False)
templates = Jinja2Templates(directory="templates")


# trips
@trips.get("/trips")
async def read_root(request: Request, db: Annotated[Session, Depends(get_db)],base_url: str = base_url):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        if user.user_type==3 :
            trips = (
                db.query(models.Trips)\
                .join(models.Customers, models.Trips.user_id == models.Customers.id)\
                .join(models.Drivers, models.Trips.driver_id == models.Drivers.id)\
                .all()
            )
            alltrips = db.query(models.Trips).order_by(models.Trips.id.desc()).all()
            bid_data = [(bid.id, bid.driver.name) for bid in trips]
            trip_data = [(bid.id, bid.customer.name) for bid in trips]
            return templates.TemplateResponse("admin/pages/trips/trips.html", {"user": user,"alltrips":alltrips, "base_url": base_url,"request": request,"error": error, "success": success})
        return RedirectResponse("/?error=You+are+not+authorized",302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
    
    
    
@trips.get("/trips/active/{id}")
async def active_status(id: int, db: Session = Depends(get_db)):
    trips = db.query(models.Trips).filter(models.Trips.id == id).first()

    if not trips:
        raise HTTPException(status_code=404, detail="Trip not found")

    trips.status = 1
    db.commit()

    return RedirectResponse("/trips/?success=Trip+has+been+activated+successfully",302)


@trips.get("/trips/inactive/{id}")
async def active_status(id: int, db: Session = Depends(get_db)):
    trips = db.query(models.Trips).filter(models.Trips.id == id).first()

    if not trips:
        raise HTTPException(status_code=404, detail="Trip not found")

    trips.status = 0
    db.commit()

    return RedirectResponse("/trips/?success=Trip+has+been+inactivated+successfully",302)
