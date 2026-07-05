from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from model import predict

app = FastAPI(
    title="ChestVision-AI API",
    description="Pneumonia Detection from Chest X-ray",
    version="1.0"
)

# السماح للـ Frontend بالاتصال
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # أثناء التطوير
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "ChestVision-AI API is running"
    }

@app.post("/predict")
async def prediction(file: UploadFile = File(...)):
    image = Image.open(file.file)
    result = predict(image)
    return result