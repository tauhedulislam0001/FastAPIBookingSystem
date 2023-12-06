from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import requests
from database import base_url
app = FastAPI()

class BkashCredentials(BaseModel):
    app_key: str
    app_secret: str
    username: str
    password: str
    sandbox: bool
    sandbox_app_key: str
    sandbox_app_secret: str
    sandbox_username: str
    sandbox_password: str

credentials = BkashCredentials(
    app_key='9Swc0ptSZL8CGyJWkWb4S6Oltc',
    app_secret='4w6j59DfLNJTNTWdLyyEJmPxDAmOOaw0RihQS7ZGVOYcZig7ikQQ',
    username='01810198960',
    password='+Fg:^UN4TKW',
    sandbox=True,
    sandbox_app_key='4f6o0cjiki2rfm34kfdadl1eqq',
    sandbox_app_secret='2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b',
    sandbox_username='sandboxTokenizedUser02',
    sandbox_password='sandboxTokenizedUser02@12345',
)


class BkashCheckoutRequest(BaseModel):
    payerReference: str
    amount: str
    currency: str
    merchantInvoiceNumber: str
    # agreementID: str
    mode: str
    callbackURL: str
    intent: str
 

def get_base_url(sandbox: bool) -> str:
    if sandbox:
        return "https://tokenized.sandbox.bka.sh/"
    else:
        return "https://tokenized.pay.bka.sh/"

async def process_token_request(token_request: BkashCredentials,amount,reference,pay_id):
    url = get_base_url(token_request.sandbox)
    print(f"id : {id}")
    payload = {
        "app_key": token_request.sandbox_app_key if token_request.sandbox else token_request.app_key,
        "app_secret": token_request.sandbox_app_secret if token_request.sandbox else token_request.app_secret,
    }
    
    headers = {
            "accept": "application/json",
            "username": token_request.sandbox_username if token_request.sandbox else token_request.username,
            "password": token_request.sandbox_password if token_request.sandbox else token_request.password,
            "content-type": "application/json"
        }


    try:
        response = requests.post(url+'v1.2.0-beta/tokenized/checkout/token/grant', json=payload, headers=headers)
        response.raise_for_status()
        id_token = response.json().get('id_token')
        # print(id_token)
           
        checkout_request =BkashCheckoutRequest(
            payerReference= reference,
            amount= amount,
            currency= 'BDT',
            merchantInvoiceNumber= '01810198960invoice',
            # agreementID= '01810198960ag',
            mode= '0011',
            callbackURL=f'{base_url}/payment/callback/bkash?reference={reference}&pay_id={pay_id}',
            intent= 'sale',
        )
        bkash_checkout = await create_bkash_checkout(id_token,token_request,checkout_request)
        return bkash_checkout
        # return JSONResponse(content=response.json(), status_code=response.status_code)

    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))




async def create_bkash_checkout(id_token: str, token_request: BkashCredentials, checkout_request: BkashCheckoutRequest):
    url = get_base_url(token_request.sandbox)

    headers = {
        "accept": "application/json",
        "Authorization": id_token, 
        "X-APP-Key": token_request.sandbox_app_key if token_request.sandbox else token_request.app_key,
        "content-type": "application/json"
    }

    payload = checkout_request.dict()

    try:
        response = requests.post(url+'v1.2.0-beta/tokenized/checkout/create', json=payload, headers=headers)
        response.raise_for_status()
        bkash_url = response.json().get('bkashURL')
        # print(bkash_url)
        return bkash_url
        return JSONResponse(content=response.json(), status_code=response.status_code)

    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))