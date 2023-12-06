from passlib.context import CryptContext
import os
from datetime import datetime, timedelta
from typing import Union, Any
from jose import jwt
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 3  # 30 minutes
REFRESH_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7 # 7 days
ALGORITHM = "HS256"
JWT_SECRET_KEY = 'Garibook!23'    
JWT_REFRESH_SECRET_KEY ='Garibook!233'     
password_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
import models
from core.helper import get_user_by_email,get_user
from fastapi.responses import HTMLResponse, RedirectResponse,Response



def create_access_token(subject: Union[str, Any], expires_delta: int = None) -> str:
    if expires_delta is not None:
        expires_delta = datetime.utcnow() + expires_delta
    else:
        expires_delta = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode = {"exp": expires_delta, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, JWT_SECRET_KEY, ALGORITHM)
    return encoded_jwt

def create_refresh_token(subject: Union[str, Any], expires_delta: int = None) -> str:
    if expires_delta is not None:
        expires_delta = datetime.utcnow() + expires_delta
    else:
        expires_delta = datetime.utcnow() + timedelta(minutes=REFRESH_TOKEN_EXPIRE_MINUTES)
    
    to_encode = {"exp": expires_delta, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, JWT_REFRESH_SECRET_KEY, ALGORITHM)
    return encoded_jwt


class TokenDecodeError(Exception):
    def __init__(self, message):
        self.message = message


async def decode_token(token,db):
    if token:
        print(f"Received token: {db}")
        try:
            payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=[ALGORITHM])
            email= payload['sub']
            exp=payload['exp']
            customer =await get_user(email,db,models.Customers)
            driver =await get_user(email,db,models.Drivers)
            admin =await get_user(email,db,models.Admins)
            if customer:
                return customer
            elif driver:
                return driver
            elif admin:
                return admin
        except jwt.JWTError as e:
            print(f"Error decoding token: {e}")
            raise TokenDecodeError("You are not authorized")
    else:
        print("No access token found in cookies")
        raise TokenDecodeError("You are not authorized")