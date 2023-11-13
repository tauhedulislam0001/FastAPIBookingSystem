from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.responses import HTMLResponse, RedirectResponse, Response
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
import routes.driver_subscription
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
app.include_router(routes.driver_subscription.driverSubcription)
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



def get_db() -> Session:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


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
