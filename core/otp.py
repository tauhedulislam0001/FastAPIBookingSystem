from fastapi import (FastAPI,Request,HTTPException,Form,APIRouter,Depends,UploadFile,File,status,)
import httpx
import models
from database import db_dependency
from random import randint
from datetime import datetime, timedelta
from core.utils import ACCESS_TOKEN_EXPIRE_MINUTES, REFRESH_TOKEN_EXPIRE_MINUTES,create_access_token, create_refresh_token,decode_token

app = FastAPI()

async def sms(send_no: str, message: str):
    api_key = "24b81ba1-1d8e-4e1b-aeab-5fd32368f88a"
    api_id = "nrb.solutions"
    api_password = "I5s7U7IQOzvb"
    api_url = "https://sms.link3.net/api/SendOTPSMS"

    headers = {
        "api_key": api_key,
        "api_id": api_id,
        "api_password": api_password,
        "Content-Type": "application/json",
    }
    send_no = "88" + send_no
    payload = {
        "to": send_no,
        "lan": "1",
        "message": message,
    }
    async with httpx.AsyncClient() as client:
        response = await client.post(api_url, json=payload, headers=headers)
    response_data = response.json()
    print(response_data)
    return response_data


async def OtpStoreDB( db, otp, sender_id, mode,):
    OldOtp = db.query(models.OTPs).filter(models.OTPs.sender_id==sender_id).first()
    if OldOtp is not None:
        OtpStore=OldOtp
        OtpStore.resend_it=OldOtp.resend_it+1
    else:
        OtpStore=models.OTPs()
    current_time = datetime.now()
    OtpStore.otp=otp, 
    OtpStore.sender_id=sender_id, 
    OtpStore.mode=mode
    OtpStore.created_at=current_time
    db.add(OtpStore)
    db.commit()
    db.refresh(OtpStore)


async def otp_send(send_no,user,db):
    code= randint(1111, 9999)
    message = f"Dear {user}, Your One Time Password (OTP): {code}"
    sms_response = await sms(send_no, message)
    await OtpStoreDB(db, code, sender_id=send_no, mode="sms")
    return sms_response

async def verify_otp(db,otp1,otp2,otp3,otp4,phone_no,email):
    otp_code = f"{otp1}{otp2}{otp3}{otp4}"
    print(otp_code)
    if phone_no:
        otp = db.query(models.OTPs).filter((models.OTPs.sender_id == phone_no) & (models.OTPs.status == 1)).first()
        senderID=phone_no
        user=db.query(models.Customers).filter(models.Customers.phone_no == phone_no).first()
        drivers=db.query(models.Drivers).filter(models.Drivers.phone_no == phone_no).first()
    elif email:
        otp = db.query(models.OTPs).filter((models.OTPs.sender_id == email) & (models.OTPs.status == 1)).first()
        senderID=email
        user=db.query(models.Customers).filter(models.Customers.email == email).first()
        drivers=db.query(models.Drivers).filter(models.Drivers.email == email).first()
    else:
        raise HTTPException(status_code=400, detail="Invalid request")
    if not otp:
        raise HTTPException(status_code=400, detail="Invalid OTP")

    is_expired = otp.created_at + timedelta(minutes=30)
    current_time = datetime.now()


    if is_expired >= current_time:
        if str(otp.otp) ==otp_code:
            
            if user is not None:
                db_user=user
            elif drivers is not None:
                db_user=drivers
            else:
                return {"message": "Invalid Phone Number."}
            access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
            refresh_token_expires = timedelta(minutes=REFRESH_TOKEN_EXPIRE_MINUTES)
            access_token = create_access_token(senderID)
            db_user.refresh_token = create_refresh_token(senderID)
            db_user.access_token = access_token
            db.commit()
            user = await decode_token(access_token, db)
            return {"message": "Logged In Successfully.","access_token": access_token, "user":user,"token_type": "bearer", "token_expires":access_token_expires}
        else:
            return {"message": "The OTP you’ve entered is incorrect. Please try again"}
    else:
        return {"message": "OTP Expired. Please Resend It."}
