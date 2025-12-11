document.getElementById("analyzeButton").addEventListener("click", () => {
    const fileInput = document.getElementById("fileInput");
    const resultBox = document.getElementById("resultBox");
    const riskText = document.getElementById("risk");
    const levelText = document.getElementById("level");

    if (!fileInput.files || fileInput.files.length === 0) {
        alert("الرجاء رفع صورة الهوية أولاً");
        return;
    }

    let file = fileInput.files[0];
    let risk = 0;

    // 🔍 تحليل بسيط حسب اسم الملف
    if (file.name.includes("fake") || file.name.includes("edit") || file.name.includes("photoshop")) {
        risk += 60;
    }

    // 🔍 تحليل جودة الصورة
    if (file.size < 80 * 1024) {
        risk += 20;
    } else if (file.size > 2 * 1024 * 1024) {
        risk += 10;
    }

    // 🔍 تحليل نوع الصورة
    if (!["image/jpeg", "image/png"].includes(file.type)) {
        risk += 30;
    }

    if (risk > 100) risk = 100;

    let level = "منخفض 🟢";
    if (risk > 80) level = "مرتفع 🔴";
    else if (risk > 50) level = "متوسط 🟡";

    riskText.innerText = "درجة الخطورة: " + risk + "%";
    levelText.innerText = "مستوى الخطورة: " + level;
    resultBox.style.display = "block";
});
