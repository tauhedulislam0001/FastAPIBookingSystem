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
from core.helper import subscription_validity
from core.bkash import process_token_request,credentials

driver = APIRouter(include_in_schema=False)
templates = Jinja2Templates(directory="templates")

# Start Socket 
from core.socket_manager import get_socketio_asgi_app
from core.socket_io import sio
app = FastAPI(include_in_schema=False)

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
        if user.subscription_status == 0:
            return RedirectResponse("/?error=You+are+not+subscribed",302)

        trips_by_id = db.query(models.Trips).filter(models.Trips.id == id).first()
        subscription_check = await subscription_validity(user,db)
        print(f'package : {subscription_check}')

        if subscription_check == 1:
            return RedirectResponse("/driver/package?error=Your+subscribed+validity+expired",302)
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
        return RedirectResponse(url=f"/bid/submit/{id}?success=Bid+Submit+Successfully", status_code=302)
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

    if created_at:
        # Convert today_date to the same timezone as created_at
        today_date = today_date.replace(tzinfo=created_at.tzinfo)

        time_difference = today_date - created_at
        days_difference = time_difference.days
    else:
        days_difference = 0
    
    if not driver:
        return RedirectResponse("drivers/?error=Driver+not+found",302)

    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    
    try:
        user = await decode_token(token, db)
        if user.user_type==3 :
            return templates.TemplateResponse("admin/pages/driver/driverUpdate.html", {"user": user, "employement":days_difference, "driver": driver, "base_url": base_url,"request": request,"error": error, "success": success})

        return RedirectResponse("/?error=You+are+not+authorized",302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
    

@driver.get("/driver/package")
async def driver_package(request: Request, db: db_dependency,base_url: str = base_url):
    token = request.cookies.get("access_token")
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    try:
        user = await decode_token(token, db)
       
        package = db.query(models.DriverSubscriptions).filter(models.DriverSubscriptions.status == 1).all()

        # isCheck_validity = await subscription_validity(user, db)
        # print(' status :  ', isCheck_DriverSubscriptions)
        
        if user.subscription_status == 1:
            isCheck_validity = await subscription_validity(user, db)
            if isCheck_validity==0:
                return RedirectResponse("/?error=You+already+inrollment+a+subscription+package", 302)
        else:
            return templates.TemplateResponse("driver_package.html", {"request": request,"user": user, "package": package,"error": error, "success": success})
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


    
@driver.get("/package/purchase/{id}")
async def update_driver_endpoint(
    request: Request,
    db:db_dependency,
    id: int,):
    token = request.cookies.get("access_token")
    payment_method=request.query_params.get("method")
    print(payment_method)
    try:
        user = await decode_token(token, db)
        package = db.query(models.DriverSubscriptions).filter(models.DriverSubscriptions.id == id).first()
      
        if package.status==1:
            if payment_method is not None:
                if payment_method =='bkash':
                    print(package.status)
                    print(package.amount)
                    result = await process_token_request(credentials,amount=f"{package.amount}",reference='package_subscription',pay_id=id)
                    html_content = f"""
                        <html>
                        <head>
                            <title>Bkash Payment</title>
                        </head>
                        <body>
                            <script>
                                window.location.href = "{result}";
                            </script>
                        </body>
                        </html>
                        """
                    return HTMLResponse(content=html_content, status_code=200)
            else:
                return RedirectResponse(f"/driver?error=Payment+error!", status_code=302)
        else:
            return RedirectResponse(f"/driver?error=Pacakge+not +available!", status_code=302)

        # driver = db.query(models.Drivers).filter(models.Drivers.id == user.id).first()
        # print(f"date: {id}")
        # driver.subscription_id = package.id
        # driver.subscription_status = 1
        # driver.subscription_at = datetime.now()
        # db.commit()
        # return RedirectResponse(f"/driver?success=Driver+subscription +successfully!", status_code=302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
    

