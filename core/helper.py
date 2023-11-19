from datetime import datetime
import os
import uuid
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import HTMLResponse, RedirectResponse, Response
import models
from PIL import Image
from io import BytesIO

def compress_image(image: Image.Image, quality: int = 85) -> BytesIO:
    output_buffer = BytesIO()
    image.save(output_buffer, format="JPEG", quality=quality)
    output_buffer.seek(0)
    return output_buffer

async def insert_image(image: UploadFile, dir: str) -> str:
    try:
        # Your existing code for creating a unique filename
        currentDate = datetime.today()
        formatted_date = currentDate.strftime("%Y-%m-%d_%H-%M-%S-%f")
        random_filename = str(uuid.uuid4())
        _, file_extension = os.path.splitext(image.filename)

        allowed_extensions = {'.jpg', '.jpeg', '.png', '.webp'}
        if file_extension.lower() not in allowed_extensions:
            raise ValueError("Invalid file type. Only jpg, png, jpeg, and webp are allowed.")

        filename = f'{random_filename}{file_extension}'

        if not os.path.exists(dir):
            os.makedirs(dir)

        # Read and compress the image
        contents = await image.read()
        original_image = Image.open(BytesIO(contents)).convert('RGB')
        quality: int = 85
        compressed_image = compress_image(original_image, quality)

        # Save the compressed image
        # compressed_filename = f'compressed_{filename}'
        with open(os.path.join(dir, filename), "wb") as f:
            f.write(compressed_image.read())

        return filename
    except ValueError as e:
        error_message = str(e)
        return None



async def get_user_by_email(email: str, db, models):
    user = db.query(models).filter(models.email == email).first()
    return user
async def get_user_by_id(id: int, db,models):
    user = db.query(models).filter(models.id == id).first()
    return user


async def truncated_description(description, max_words=30):
    words = description.split()
    truncated_words = words[:max_words]
    truncated_text = ' '.join(truncated_words)
    if len(words) > max_words:
        truncated_text += '...'
    return truncated_text

async def subscription_validity(user,db):
    if user.subscription_status == 1:
        if user.subscription_id is not None:
            package = db.query(models.DriverSubscriptions).filter(models.DriverSubscriptions.id == user.subscription_id).first()
            package_duration=package.package_duration
            if user.subscription_at is not None:
                subscription_at=user.subscription_at
                today_date = datetime.now()
                today_date = today_date.replace(tzinfo=subscription_at.tzinfo)
                time_difference = today_date - subscription_at
                days_difference = time_difference.days
                if package_duration < days_difference:
                    return 1
                else :
                    return 0
                