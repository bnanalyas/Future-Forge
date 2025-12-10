async function analyzeDocument() {
    const fileInput = document.getElementById("fileInput");
    const resultBox = document.getElementById("resultBox");

    if (!fileInput.files.length) {
        alert("يرجى رفع ملف للتحليل");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    // الاتصال بالـ API
    const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    document.getElementById("risk").innerText = "درجة الخطورة: " + data.risk_score + "%";
    document.getElementById("level").innerText = "مستوى الخطورة: " + data.risk_level;

    resultBox.style.display = "block";
}

