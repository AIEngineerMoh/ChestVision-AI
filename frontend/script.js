const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const predictBtn = document.getElementById("predictBtn");

const loading = document.getElementById("loading");
const result = document.getElementById("result");

const prediction = document.getElementById("prediction");
const confidence = document.getElementById("confidence");

const normalValue = document.getElementById("normalValue");
const pneumoniaValue = document.getElementById("pneumoniaValue");

const normalBar = document.getElementById("normalBar");
const pneumoniaBar = document.getElementById("pneumoniaBar");


// ================= Preview Image =================

imageInput.addEventListener("change", () => {

    const file = imageInput.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Please select a valid image.");
        imageInput.value = "";
        return;
    }

    previewImage.src = URL.createObjectURL(file);
    previewImage.style.display = "block";

    result.style.display = "none";

});


// ================= Predict =================

predictBtn.addEventListener("click", async () => {

    const file = imageInput.files[0];

    if (!file) {
        alert("Please select a Chest X-ray image.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    loading.style.display = "block";
    result.style.display = "none";

    predictBtn.disabled = true;
    predictBtn.innerHTML = "⏳ Analyzing...";

    try {

        const response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error("Server Error");
        }

        const data = await response.json();

        loading.style.display = "none";
        result.style.display = "block";

        prediction.textContent = data.prediction;
        confidence.textContent = `${data.confidence}%`;

        const normal = Number(data.probabilities.Normal).toFixed(1);
        const pneumonia = Number(data.probabilities.Pneumonia).toFixed(1);

        normalValue.textContent = `${normal}%`;
        pneumoniaValue.textContent = `${pneumonia}%`;

        normalBar.style.width = `${normal}%`;
        pneumoniaBar.style.width = `${pneumonia}%`;

        if (data.prediction === "Pneumonia") {
            prediction.style.color = "#ef4444";
        } else {
            prediction.style.color = "#22c55e";
        }

    } catch (error) {

        loading.style.display = "none";

        alert("❌ Unable to connect to the FastAPI server.");

        console.error(error);

    } finally {

        predictBtn.disabled = false;
        predictBtn.innerHTML = "🔍 Analyze X-ray";

    }

});