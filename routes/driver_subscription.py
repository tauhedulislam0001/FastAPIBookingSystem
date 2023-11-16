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
from core.helper import truncated_description


driverSubcription = APIRouter(include_in_schema=False)
templates = Jinja2Templates(directory="templates")

# Start Socket 
from core.socket_manager import get_socketio_asgi_app
from core.socket_io import sio
app = FastAPI()


# End Sokcet
@driverSubcription.get("/driver-subscription")
async def read_root(request: Request, db: Annotated[Session, Depends(get_db)],base_url: str = base_url):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    
    try:
        user = await decode_token(token, db)
        if user.user_type== 3 :
            driverSubcription = db.query(models.DriverSubscriptions).order_by(models.DriverSubscriptions.id.desc()).all()
            return templates.TemplateResponse("admin/pages/driver_subcription/driver_subcription.html", {"user": user, "driverSubcription": driverSubcription, "base_url": base_url,"request": request,"error": error, "success": success,})
        return RedirectResponse("/?error=You+are+not+authorized",302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
    

@driverSubcription.post("/driver-subscription/create")
async def update_driver_endpoint(
    request: Request,
    db: db_dependency,
    package_name: str = Form(...),
    package_description: str = Form(...),
    package_duration: str = Form(...),
    amount: str = Form(...)):
    
    subscription = models.DriverSubscriptions(
        package_name=package_name,
        package_description=package_description,
        package_duration=package_duration,
        amount=amount,
    )
    
    db.add(subscription)
    db.commit()
    db.refresh(subscription)
    
    token = request.cookies.get("access_token")
    
    try:
        user = await decode_token(token, db)
        if user.user_type==3 :
            return RedirectResponse("/driver-subscription/?success=Driver+subscription+added+successfully!", status_code=302)
        return RedirectResponse("/driver-subscription/?error=Driver+are+not+authorized",302)
    except TokenDecodeError as e:
        return RedirectResponse("/driver-subscription/?error=Driver+subscription+not+added",302)
    
    
@driverSubcription.get("/driver-subscription/active/{id}")
async def active_status(id: int, db: Session = Depends(get_db)):
    driver = db.query(models.DriverSubscriptions).filter(models.DriverSubscriptions.id == id).first()

    if not driver:
        raise HTTPException(status_code=404, detail="Driver not found")

    driver.status = 1
    db.commit()

    return RedirectResponse("/driver-subscription/?success=Driver+subcription+has+been+activated+successfully",302)


@driverSubcription.get("/driver-subscription/inactive/{id}")
async def active_status(id: int, db: Session = Depends(get_db)):
    driver = db.query(models.DriverSubscriptions).filter(models.DriverSubscriptions.id == id).first()

    if not driver:
        raise HTTPException(status_code=404, detail="Driver not found")

    driver.status = 0
    db.commit()

    return RedirectResponse("/driver-subscription/?success=Driver+subcription+has+been+inactivated+successfully",302)
    

@driverSubcription.get("/driver-subscription/edit/{id}")
async def active_status(id: int, request: Request, db: db_dependency, base_url: str = base_url):
    driverSubscription = db.query(models.DriverSubscriptions).filter(models.DriverSubscriptions.id == id).first()
    
    if not driverSubscription:
        return RedirectResponse("/driver-subscription/?error=Driver+subscription+not+found",302)

    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    
    try:
        user = await decode_token(token, db)
        if user.user_type==3 :
            return templates.TemplateResponse("admin/pages/driver_subcription/driver_subscripton_edit.html", {"user": user, "driverSubscription": driverSubscription, "base_url": base_url,"request": request,"error": error, "success": success})
        return RedirectResponse("/?error=You+are+not+authorized",302)
    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
    

@driverSubcription.post("/driver-subscription/update/{subscription_id}")
async def update_driver_endpoint(
    request: Request,
    db:db_dependency,
    subscription_id: int,
    package_name : str = Form(...),
    package_description : str = Form(...),
    package_duration : int = Form(...),
    amount : int = Form(...)):
    
    
    # Retrieve the existing driver from the database
    subcriptionUpdate = db.query(models.DriverSubscriptions).filter(models.DriverSubscriptions.id == subscription_id).first()

    if not subcriptionUpdate:
        raise HTTPException(status_code=404, detail="Driver not found")
    
    subcriptionUpdate.package_name = package_name
    subcriptionUpdate.package_description = package_description
    subcriptionUpdate.package_duration = package_duration
    subcriptionUpdate.amount = amount
    print(subcriptionUpdate.package_duration)
    db.commit()
    # Refresh the driver instance to reflect the changes
    db.refresh(subcriptionUpdate)
    return RedirectResponse(f"/driver-subscription/edit/{subscription_id}/?success=Driver+information+updated+successfully!", status_code=302)