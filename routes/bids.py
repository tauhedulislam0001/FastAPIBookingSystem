from fastapi import FastAPI, Request, HTTPException, Form,APIRouter,Depends
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse,JSONResponse
from fastapi.staticfiles import StaticFiles
from core.utils import decode_token,TokenDecodeError
from typing import Annotated
import models
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base,get_db,base_url
from middleware.CheckUser import UserCheck
from datetime import datetime, timedelta

bids = APIRouter()

templates = Jinja2Templates(directory="templates")

db_dependency = Annotated[Session, Depends(get_db)]

# Start Socket 
from core.socket_manager import get_socketio_asgi_app
from core.socket_io import sio
app = FastAPI()

sio_asgi_app = get_socketio_asgi_app(app)
app.add_route("/socket.io/", route=sio_asgi_app, methods=["GET", "POST"])
app.add_websocket_route("/socket.io/", sio_asgi_app)


# End Sokcet

@bids.get("/bids")
async def read_root(request: Request,db:db_dependency):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        if user.user_type==3 :
            bids = db.query(models.Bids).order_by(models.Bids.id.desc()).all()
            return templates.TemplateResponse("admin/pages/bids/bids.html", {"user": user, "bids": bids, "request": request,"error": error, "success": success})
        return RedirectResponse("/?error=You+are+not+authorized",302)

    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)
    
@bids.get("/watch/bids/{id}")
async def watch_bids(id:int, request: Request,db:db_dependency,base_url: str = base_url):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        if user.user_type==3:
            watch_bids = db.query(models.Trips).filter(models.Trips.id == id).first()
            return templates.TemplateResponse("admin/pages/trips/show_bids.html", {"user": user, "watch_bids": watch_bids, "base_url": base_url,"request": request,"error": error, "success": success})
        return RedirectResponse("/?error=You+are+not+authorized",302)

    except TokenDecodeError as e:
        return RedirectResponse("/?error=You+are+not+authorized",302)

