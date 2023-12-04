from fastapi import FastAPI, HTTPException
import httpx

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
    send_no = '88' + send_no
    payload = {
        "to": send_no,
        "lan": "1",
        "message": message,
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(api_url, json=payload, headers=headers)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Failed to send SMS")

    response_data = response.json()
    # You can log the response_data as needed
    print(response_data)
    
    return response_data