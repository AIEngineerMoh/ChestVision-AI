# 🫁 ChestVision-AI

An AI-powered web application for detecting **Pneumonia** from Chest X-ray images using **Deep Learning (ResNet18)** and **FastAPI**.

## 🚀 Features

- 📤 Upload Chest X-ray images
- 🤖 AI-powered Pneumonia detection
- 📊 Prediction confidence score
- 📈 Probability visualization
- ⚡ FastAPI backend
- 🎨 Modern HTML, CSS, and JavaScript frontend

---

## 🛠️ Technologies Used

### Backend
- Python
- FastAPI
- PyTorch
- Torchvision
- Pillow
- Uvicorn

### Frontend
- HTML5
- CSS3
- JavaScript

---

## 📂 Project Structure

```
ChestVision-AI/
│
├── Backend/
│   ├── app.py
│   ├── model.py
│   ├── requirements.txt
│   └── chest_xray_m1odel.pth
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/AIEngineerMoh/ChestVision-AI.git
```

Go to the project folder:

```bash
cd ChestVision-AI
```

Install the required packages:

```bash
pip install -r Backend/requirements.txt
```

Run the FastAPI server:

```bash
uvicorn Backend.app:app --reload
```

Open the frontend by launching `frontend/index.html` in your browser.

---

## 📷 How It Works

1. Upload a Chest X-ray image.
2. Click **Analyze X-ray**.
3. The AI model predicts:
   - ✅ Normal
   - 🔴 Pneumonia
4. View the confidence score and class probabilities.

---

## 🧠 AI Model

- Model: **ResNet18**
- Framework: **PyTorch**
- Task: Binary Image Classification
- Classes:
  - Normal
  - Pneumonia

---

## 📌 Future Improvements

- User authentication
- Patient history
- Database integration
- PDF medical reports
- Cloud deployment
- Multi-disease classification

---

## 👨‍💻 Author

**Mohamed**

GitHub: https://github.com/AIEngineerMoh

---

## ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.
