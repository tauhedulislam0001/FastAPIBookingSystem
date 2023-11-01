from fastapi import FastAPI, Request, HTTPException, Form,APIRouter,Depends
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse,JSONResponse
from database import database, connect_to_database, close_database_connection
from fastapi.staticfiles import StaticFiles



driver = APIRouter()

templates = Jinja2Templates(directory="templates")

@driver.on_event("startup")
async def startup_db():
    await connect_to_database()

@driver.on_event("shutdown")
async def shutdown_db():
    await close_database_connection()