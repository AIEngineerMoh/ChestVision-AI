import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image

device = torch.device("cpu")

# إنشاء النموذج
model = models.resnet18(weights=None)
model.fc = nn.Linear(model.fc.in_features, 2)

# تحميل الوزن
model.load_state_dict(torch.load("chest_xray_m1odel.pth", map_location=device))
model.eval()

# التحويلات
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

classes = ["Normal", "Pneumonia"]

def predict(image: Image.Image):
    image = image.convert("RGB")
    image = transform(image).unsqueeze(0)

    with torch.no_grad():
        outputs = model(image)
        probabilities = torch.softmax(outputs, dim=1)
        confidence, predicted = torch.max(probabilities, 1)

    probs = {
        classes[i]: round(probabilities[0][i].item() * 100, 2)
        for i in range(len(classes))
    }

    return {
        "prediction": classes[predicted.item()],
        "confidence": round(confidence.item() * 100, 2),
        "probabilities": probs
    }
    
