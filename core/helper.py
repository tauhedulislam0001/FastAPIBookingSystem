from datetime import datetime

async def insert_image(image, dir):
    currentDate = datetime.today()
    formatted_date = currentDate.strftime("%Y-%m-%d_%H-%M-%S-%f")
    contents = await image.read()
    filename = f'{formatted_date}_{image.filename}' 
    with open(f"{dir}{filename}", "wb") as f:
        f.write(contents)
    return filename