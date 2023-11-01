from fastapi import FastAPI, HTTPException, Depends, status
from pydantic import BaseModel
from typing import Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
import hashlib
from jose import JWTError, jwt
import secrets
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.security import OAuth2PasswordBearer
from fastapi_sessions import Session, get_session

SECRET_KEY = secrets.token_hex(32)  # Generate a random secret key with 32 bytes
ALGORITHM = "HS256" # The algorithm used to sign the tokens
ACCESS_TOKEN_EXPIRE_MINUTES = 30  # Token expiration time in minutes


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Depends(get_db)

# create login system
def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)  # Default expiration time
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


#login user
@app.post("/driver-login", status_code=status.HTTP_200_OK, tags=["Authentication"])
async def login_user(user: DriverLogin, db:db_dependency):
    db_user = db.query(models.User).filter(models.User.username == user.username).first()
    if db_user and db_user.password == hashlib.md5(user.password.encode()).hexdigest():
        if db_user.status == 1:
                # If the user is authenticated, generate an access token
                access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
                access_token = create_access_token(data={"sub": user.username}, expires_delta=access_token_expires)
                
                # Update the access token in the database
                db_user = db.query(models.User).filter(models.User.username == user.username).first()
                db_user.access_token = access_token
                db.commit()
                
                # Return the token in the response
                return {"access_token": access_token, "token_type": "bearer", "user_type":1}
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Account is banned")
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid username or password")


#login user
@app.post("/customer-login", status_code=status.HTTP_200_OK, tags=["Authentication"])
async def login_user(user: CustomerLogin, db:db_dependency):
    db_user = db.query(models.User).filter(models.User.username == user.username).first()
    if db_user and db_user.password == hashlib.md5(user.password.encode()).hexdigest():
        if db_user.status == 1:
                # If the user is authenticated, generate an access token
                access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
                access_token = create_access_token(data={"sub": user.username}, expires_delta=access_token_expires)
                
                # Update the access token in the database
                db_user = db.query(models.User).filter(models.User.username == user.username).first()
                db_user.access_token = access_token
                db.commit()
                
                # Return the token in the response
                return {"access_token": access_token, "token_type": "bearer", "user_type":1}
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Account is banned")
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid username or password")


# logout
@app.post('/driver-logout', status_code=status.HTTP_101_SWITCHING_PROTOCOLS, tags=["Authentication"])
async def logout_user(user: CustomerLogin, db: db_dependency):
    db_user = db.query(models.User).filter(models.User.username == user.username).first()
    db_user.access_token = None
    db.commit()
    return {"message":"User logged out successfully"}


@app.post('/customer-logout', status_code=status.HTTP_101_SWITCHING_PROTOCOLS, tags=["Authentication"])
async def logout_user(user: DriverLogin, db: db_dependency):
    db_user = db.query(models.User).filter(models.User.username == user.username).first()
    db_user.access_token = None
    db.commit()
    return {"message":"User logged out successfully"}