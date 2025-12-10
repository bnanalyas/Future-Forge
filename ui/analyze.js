async function analyzeDocument() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
        alert("الرجاء رفع ملف!");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // عنوان السيرفر المحلي للباك-إند
    const apiURL = "http://127.0.0.1:5000/analyze";

    try {
        const response = await fetch(apiURL, {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        document.getElementById("risk").innerText =
            "درجة الخطورة: " + result.risk_score + "%";

        let level = "منخفض 🟢";
        if (result.risk_level === "High") level = "مرتفع 🔴";
        else if (result.risk_level === "Medium") level = "متوسط 🟡";

        document.getElementById("level").innerText =
            "مستوى الخطورة: " + level;

        document.getElementById("resultBox").style.display = "block";

    } catch (error) {
        console.error(error);
        alert("حدث خطأ أثناء الاتصال بالخادم");
    }
}
