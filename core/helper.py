from datetime import datetime
import os
import uuid

async def insert_image(image, dir):
    currentDate = datetime.today()
    formatted_date = currentDate.strftime("%Y-%m-%d_%H-%M-%S-%f")
    random_filename = str(uuid.uuid4())
    filename = f'{formatted_date}_{random_filename}_{image.filename}' 

    # Check if the directory exists, if not, create it
    if not os.path.exists(dir):
        os.makedirs(dir)

    contents = await image.read()
    with open(f"{dir}{filename}", "wb") as f:
        f.write(contents)
    return filename