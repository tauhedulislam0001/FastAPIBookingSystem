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


driver = APIRouter()
templates = Jinja2Templates(directory="templates")

# Start Socket 
from core.socket_manager import get_socketio_asgi_app
from core.socket_io import sio
app = FastAPI()

sio_asgi_app = get_socketio_asgi_app(app)
app.add_route("/socket.io/", route=sio_asgi_app, methods=["GET", "POST"])
app.add_websocket_route("/socket.io/", sio_asgi_app)


# End Sokcet
@driver.get("/driver")
async def read_root(request: Request, db: Annotated[Session, Depends(get_db)],base_url: str = base_url):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        if user.user_type==2 :
            return templates.TemplateResponse("driver_trip_list.html", {"user": user,"base_url": base_url,"request": request,"error": error, "success": success})
        return RedirectResponse("/?error=You+are+not+authorized",302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)

@driver.get("/trips/get")
async def trips_get(request: Request,db:Annotated[Session, Depends(get_db)]):
    trips = db.query(models.Trips).order_by(models.Trips.id.desc()).filter(models.Trips.fare.is_(None)).all()
    return trips

@driver.get("/bid/submit/{id}")
async def bid_submit(id: int, request: Request, db: Annotated[Session, Depends(get_db)],base_url: str = base_url):
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        trips_by_id = db.query(models.Trips).filter(models.Trips.id == id).first()
        # Example: trips = db.query(models.Trips).filter(models.Trips.id == id).all()
        error = request.query_params.get("error")
        success = request.query_params.get("success")
        return templates.TemplateResponse("driver_bid.html", {"user": user,"trips": trips_by_id,"base_url": base_url,"request": request,"error": error, "success": success})
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)

@driver.get("/bid/get/{id}")
async def trips_get(id: int,request: Request,db:Annotated[Session, Depends(get_db)]):
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        bids = db.query(models.Bids)\
            .join(models.Drivers, models.Bids.driver_id == models.Drivers.id)\
            .join(models.Trips, models.Bids.trip_id == models.Trips.id)\
            .filter(models.Bids.trip_id == id)\
            .all()
        bidsss = db.query(models.Bids).filter(models.Bids.trip_id == id).all()
        bid_data = [(bid.id, bid.amount, bid.driver.name) for bid in bids]
        trip_data = [(bid.id, bid.amount, bid.trip.fare) for bid in bids]
        return {'bids': bids, 'user': user,'bidsss':bidsss}
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)


@driver.post("/bid-submit/{id}")
async def bid_store(
    id: int,
    request: Request,
    db: Annotated[Session, Depends(get_db)],
    amount: int = Form(None)
    ):
    if  amount is None:
        return RedirectResponse(url=f"/bid/submit/{id}?success=Amount is required", status_code=302)
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        BidsAdd = models.Bids(
                trip_id=id,
                driver_id=user.id,
                amount=amount,
            )   
        db.add(BidsAdd)
        db.commit()
        db.refresh(BidsAdd)
        print(f"Bid: {BidsAdd.amount}")
        await sio.emit("BidList" + str(id), 'New Bid Store BidList' + str(id))
        return RedirectResponse(url=f"/bid/submit/{id}?success=Trips+Add+successfully", status_code=302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
    
    

# all driver
@driver.get("/drivers")
async def read_root(request: Request, db: db_dependency,base_url: str = base_url):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        if user.user_type==3 :
            # drivers = db.query(models.Drivers).all()
            drivers = db.query(models.Drivers).order_by(models.Drivers.id.desc()).all()
            return templates.TemplateResponse("admin/pages/driver/driver.html", {"user": user, "drivers": drivers, "base_url": base_url,"request": request,"error": error, "success": success})
        return RedirectResponse("/?error=You+are+not+authorized",302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
    
    
    
@driver.get("/driver/active/{id}")
async def active_status(id: int, db: Session = Depends(get_db)):
    driver = db.query(models.Drivers).filter(models.Drivers.id == id).first()

    if not driver:
        raise HTTPException(status_code=404, detail="Driver not found")

    driver.status = 1
    db.commit()

    return RedirectResponse("/drivers/?success=Driver+has+been+activated+successfully",302)


@driver.get("/driver/inactive/{id}")
async def active_status(id: int, db: Session = Depends(get_db)):
    driver = db.query(models.Drivers).filter(models.Drivers.id == id).first()

    if not driver:
        raise HTTPException(status_code=404, detail="Driver not found")

    driver.status = 0
    db.commit()

    return RedirectResponse("/drivers/?success=Driver+has+been+inactivated+successfully",302)


@driver.get("/driver/edit/{id}")
async def active_status(id: int, request: Request, db: db_dependency, base_url: str = base_url):
    driver = db.query(models.Drivers).filter(models.Drivers.id == id).first()
    created_at = driver.created_at
    today_date = datetime.now()
    
    time_difference = today_date - created_at
    days_difference = time_difference.days
    
    if not driver:
        return RedirectResponse("drivers/?error=Driver+not+found",302)

    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    
    try:
        user = await decode_token(token, db)
        if user.user_type==3 :
            return templates.TemplateResponse("admin/pages/driver/driverUpdate.html", {"user": user, "employement":days_difference, "driver": driver, "base_url": base_url,"request": request,"error": error, "success": success, "error_driver": error_driver, "success_customer": success_customer, "error_customer": error_customer, "success_driver": success_driver})

        return RedirectResponse("/?error=You+are+not+authorized",302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
    
    
@driver.post("/driver/update/{driver_id}")
async def update_driver_endpoint(
    request: Request,
    db:db_dependency,
    driver_id: int,
    name: str = Form(...),
    email: str = Form(...)):
    
    # Retrieve the existing driver from the database
    driver = db.query(models.Drivers).filter(models.Drivers.id == driver_id).first()

    if not driver:
        raise HTTPException(status_code=404, detail="Driver not found")
    
    driver.name = name
    driver.email = email
    
    db.commit()
    # Refresh the driver instance to reflect the changes
    db.refresh(driver)
    return RedirectResponse(f"/driver/edit/{driver_id}?success=Driver+information+updated+successfully!", status_code=302)

