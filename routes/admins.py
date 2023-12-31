from fastapi import FastAPI, Request, HTTPException, Form, APIRouter, Depends, status
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse,JSONResponse
from fastapi.staticfiles import StaticFiles
from core.utils import decode_token,TokenDecodeError
from typing import Annotated
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base,get_db,base_url
import models
from database import db_dependency
from core.utils import ACCESS_TOKEN_EXPIRE_MINUTES, REFRESH_TOKEN_EXPIRE_MINUTES
from datetime import timedelta
import hashlib
from core.utils import create_access_token, create_refresh_token


admin = APIRouter(include_in_schema=False)
templates = Jinja2Templates(directory="templates")


# admin login
@admin.get("/admin/login")
async def read_root(request: Request, db: db_dependency):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    try:
        user = await decode_token(token, db)
        db_user = db.query(models.Admins).filter(models.Admins.email == user.email).first()
        if db_user is not None:
            return RedirectResponse("/admin/dashboard", 302)
        else:
            return templates.TemplateResponse("404.html", {"request": request,'user':user})
    except TokenDecodeError as e:
        return templates.TemplateResponse("admin/pages/login/login.html", {"request": request, "error": error, "success": success})
        

# login admin user
@admin.post("/admin/login/submit", status_code=status.HTTP_200_OK, tags=["Authentication"])
async def admin_login_user(
        db: db_dependency,
        email: str = Form(...),
        password: str = Form(...)):
    db_user = db.query(models.Admins).filter(models.Admins.email == email).first()
    print(f"db_user:{db_user}")
    if db_user and db_user.password == hashlib.md5(password.encode()).hexdigest():
        if db_user.status == 1:
            # If the user is authenticated, generate an access token
            access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
            refresh_token_expires = timedelta(minutes=REFRESH_TOKEN_EXPIRE_MINUTES)
            access_token = create_access_token(db_user.email)
            refresh_token = create_refresh_token(db_user.email)

            # Update the access token in the database
            db_user.access_token = access_token
            db.commit()
            if db_user is not None:
                if db_user.user_type == 3:
                    response = RedirectResponse("/admin/dashboard?success=Admin+login+successfully", 302)
                    response.set_cookie(key="access_token", value=access_token, expires=access_token_expires)
                    response.set_cookie(key="refresh_token", value=refresh_token, expires=refresh_token_expires)
                    return response
                else:
                    return RedirectResponse("/admin/login?error=You+are+not+authorize+to+access+dashboard", 302)
            else:
                return RedirectResponse("/admin/login?error=You+are+not+authorize+to+access+dashboard", 302)
        return RedirectResponse("/admin/login?error=Account+is+banned", 302)
    return RedirectResponse("/admin/login?error=Invalid+email+or+password", 302)


@admin.post("/admin/logout")
async def logout(request: Request):
    response = RedirectResponse(
        '/admin/login?success=Logged+out', 302
    )
    response.delete_cookie("access_token")
    return response


# admin dashboard
@admin.get("/admin/dashboard")
async def read_root(request: Request, db: db_dependency,base_url: str = base_url):
    error = request.query_params.get("error")
    success = request.query_params.get("success")
    token = request.cookies.get("access_token")
    
    try:
        user = await decode_token(token, db)

        if user.user_type == 3:
            total_trips = db.query(models.Trips).count()
            total_customer = db.query(models.Customers).count()
            total_driver = db.query(models.Drivers).count()
            return templates.TemplateResponse("admin/pages/dashboard/dashboard.html", {"user": user, "total_trips": total_trips, "total_customer": total_customer, "total_driver": total_driver, "base_url": base_url, "request": request, "error": error, "success": success})

        else:
            return templates.TemplateResponse("404.html", {"request": request,'user':user})
        
    except TokenDecodeError as e:
        print(f"Token Decoding Error: {e}")
        logout(request)
        return RedirectResponse("/admin/login?error=You+are+not+authenticated", 302)