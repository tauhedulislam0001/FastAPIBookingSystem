from fastapi import FastAPI, Request, Depends
from core.utils import decode_token, TokenDecodeError
from typing import Annotated
from sqlalchemy.orm import Session
from database import SessionLocal
def get_db() -> Session:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def UserCheck(
    request: Request,
    call_next,
    db
):
    print(f"User: {db}")

    token = request.cookies.get("access_token")
    try:
        user = decode_token(token, db)
        print(f"User: {user}")
    except TokenDecodeError as e:
        print(f"Error: {e}")

    print("Before the route handler")
    response = call_next(request)
    print("After the route handler")
    return response