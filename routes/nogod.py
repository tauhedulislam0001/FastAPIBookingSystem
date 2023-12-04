from fastapi import APIRouter, FastAPI, Request, HTTPException
from fastapi.responses import RedirectResponse,HTMLResponse
import logging
logger = logging.getLogger(__name__)
from core.nogod_core import NagadPaymentVerify, NagadPayment
import uuid

nogod_app = APIRouter()

nagad_payment = NagadPayment(
    merchant_id="683002007104225",
    callback_url="http://127.0.0.1:8000/payment/callback",
    base_url="http://sandbox.mynagad.com:10080/remote-payment-gateway-1.0/api/dfs/",
    public_key="MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjBH1pFNSSRKPuMcNxmU5jZ1x8K9LPFM4XSu11m7uCfLUSE4SEjL30w3ockFvwAcuJffCUwtSpbjr34cSTD7EFG1Jqk9Gg0fQCKvPaU54jjMJoP2toR9fGmQV7y9fz31UVxSk97AqWZZLJBT2lmv76AgpVV0k0xtb/0VIv8pd/j6TIz9SFfsTQOugHkhyRzzhvZisiKzOAAWNX8RMpG+iqQi4p9W9VrmmiCfFDmLFnMrwhncnMsvlXB8QSJCq2irrx3HG0SJJCbS5+atz+E1iqO8QaPJ05snxv82Mf4NlZ4gZK0Pq/VvJ20lSkR+0nk+s/v3BgIyle78wjZP1vWLU4wIDAQAB",
    private_key="MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCJakyLqojWTDAVUdNJLvuXhROV+LXymqnukBrmiWwTYnJYm9r5cKHj1hYQRhU5eiy6NmFVJqJtwpxyyDSCWSoSmIQMoO2KjYyB5cDajRF45v1GmSeyiIn0hl55qM8ohJGjXQVPfXiqEB5c5REJ8Toy83gzGE3ApmLipoegnwMkewsTNDbe5xZdxN1qfKiRiCL720FtQfIwPDp9ZqbG2OQbdyZUB8I08irKJ0x/psM4SjXasglHBK5G1DX7BmwcB/PRbC0cHYy3pXDmLI8pZl1NehLzbav0Y4fP4MdnpQnfzZJdpaGVE0oI15lq+KZ0tbllNcS+/4MSwW+afvOw9bazAgMBAAECggEAIkenUsw3GKam9BqWh9I1p0Xmbeo+kYftznqai1pK4McVWW9//+wOJsU4edTR5KXK1KVOQKzDpnf/CU9SchYGPd9YScI3n/HR1HHZW2wHqM6O7na0hYA0UhDXLqhjDWuM3WEOOxdE67/bozbtujo4V4+PM8fjVaTsVDhQ60vfv9CnJJ7dLnhqcoovidOwZTHwG+pQtAwbX0ICgKSrc0elv8ZtfwlEvgIrtSiLAO1/CAf+uReUXyBCZhS4Xl7LroKZGiZ80/JE5mc67V/yImVKHBe0aZwgDHgtHh63/50/cAyuUfKyreAH0VLEwy54UCGramPQqYlIReMEbi6U4GC5AQKBgQDfDnHCH1rBvBWfkxPivl/yNKmENBkVikGWBwHNA3wVQ+xZ1Oqmjw3zuHY0xOH0GtK8l3Jy5dRL4DYlwB1qgd/Cxh0mmOv7/C3SviRk7W6FKqdpJLyaE/bqI9AmRCZBpX2PMje6Mm8QHp6+1QpPnN/SenOvoQg/WWYM1DNXUJsfMwKBgQCdtddE7A5IBvgZX2o9vTLZY/3KVuHgJm9dQNbfvtXw+IQfwssPqjrvoU6hPBWHbCZl6FCl2tRh/QfYR/N7H2PvRFfbbeWHw9+xwFP1pdgMug4cTAt4rkRJRLjEnZCNvSMVHrri+fAgpv296nOhwmY/qw5Smi9rMkRY6BoNCiEKgQKBgAaRnFQFLF0MNu7OHAXPaW/ukRdtmVeDDM9oQWtSMPNHXsx+crKY/+YvhnujWKwhphcbtqkfj5L0dWPDNpqOXJKV1wHt+vUexhKwus2mGF0flnKIPG2lLN5UU6rs0tuYDgyLhAyds5ub6zzfdUBG9Gh0ZrfDXETRUyoJjcGChC71AoGAfmSciL0SWQFU1qjUcXRvCzCK1h25WrYS7E6pppm/xia1ZOrtaLmKEEBbzvZjXqv7PhLoh3OQYJO0NM69QMCQi9JfAxnZKWx+m2tDHozyUIjQBDehve8UBRBRcCnDDwU015lQN9YNb23Fz+3VDB/LaF1D1kmBlUys3//r2OV0Q4ECgYBnpo6ZFmrHvV9IMIGjP7XIlVa1uiMCt41FVyINB9SJnamGGauW/pyENvEVh+ueuthSg37e/l0Xu0nm/XGqyKCqkAfBbL2Uj/j5FyDFrpF27PkANDo99CdqL5A4NQzZ69QRlCQ4wnNCq6GsYy2WEJyU2D+K8EBSQcwLsrI7QL7fvQ==",
)

@nogod_app.get("/pay/nagad")
def initiate_payment():
    payment_response = {}  # Initialize with an empty dictionary
    try:
        payment_response = nagad_payment.checkout_process(
            amount="10.00",
            invoice_number=str(uuid.uuid4().hex)[:20],
        )
        print(f"payment_response : {payment_response}")
        callback_url = payment_response.get('callBackUrl')
        # Print or use the callback_url as needed
        print(f"Callback URL: {callback_url}")
        return RedirectResponse(url=callback_url)
    except Exception as e:
        logger.error(str(e))
   

    return {
        "payment_url": payment_response.get("callBackUrl"),
        "message": "success"
    }

@nogod_app.get("/payment/callback", response_class=RedirectResponse, status_code=302)
def payment_response_endpoint(request: Request):
    payment_response = dict(request.query_params)
    order_id = payment_response.get("order_id")
    if payment_response.get("status") != "Success":
        print("Payment failed or cancel.Do the change your db")
        return f"http://127.0.0.1:8000/payment-status/?status=failed&user_tnx_ref={order_id}"

    payment_verify = NagadPaymentVerify(base_url="http://sandbox.mynagad.com:10080/remote-payment-gateway-1.0/api/dfs/")
    payment_reference_id = payment_response.get("payment_ref_id")
    verification_result = payment_verify.verify_payment(payment_reference_id)

    if (
        verification_result.get("statusCode") == "000"
        and verification_result.get("status") == "Success"
        and verification_result.get("issuerPaymentRefNo")
    ):
        return f"http://127.0.0.1:8000/payment-status/?status=success&user_tnx_ref={order_id}"
    else:
        return f"http://127.0.0.1:8000/payment-status/?status=failed&user_tnx_ref={order_id}"
    

@nogod_app.get("/payment-status/")
def payment_status(status: str, user_tnx_ref: str):
    if status == "failed":
        print(f"Payment failed for user transaction reference: {user_tnx_ref}")

        return {"message": f"Payment failed for user transaction reference: {user_tnx_ref}"}

    elif status == "success":
        print(f"Payment successful for user transaction reference: {user_tnx_ref}")

        return {"message": f"Payment successful for user transaction reference: {user_tnx_ref}"}

    else:
        raise HTTPException(status_code=400, detail="Invalid payment status")