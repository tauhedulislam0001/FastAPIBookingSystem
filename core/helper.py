from datetime import datetime
import os
import uuid
from fastapi.responses import HTMLResponse, RedirectResponse, Response


async def insert_image(image, dir):
    try:
        currentDate = datetime.today()
        formatted_date = currentDate.strftime("%Y-%m-%d_%H-%M-%S-%f")
        random_filename = str(uuid.uuid4())
        # Get the original file extension from the image filename
        _, file_extension = os.path.splitext(image.filename)

        # Check if the file extension is allowed (jpg, png, jpeg, webp)
        allowed_extensions = {'.jpg', '.jpeg', '.png', '.webp'}
        if file_extension.lower() not in allowed_extensions:
            raise ValueError("Invalid file type. Only jpg, png, jpeg, and webp are allowed.")

        filename = f'{random_filename}_{image.filename}' 


        if not os.path.exists(dir):
            os.makedirs(dir)

        contents = await image.read()
        with open(f"{dir}{filename}", "wb") as f:
            f.write(contents)
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