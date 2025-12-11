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

    // 🔍 تحليل حسب الاسم
    if (file.name.toLowerCase().includes("fake") ||
        file.name.toLowerCase().includes("edit") ||
        file.name.toLowerCase().includes("ps")) {
        risk += 60;
    }

    // 🔍 تحليل الجودة حسب الحجم
    if (file.size < 90 * 1024) risk += 25; // منخفضة الجودة
    if (file.size > 2 * 1024 * 1024) risk += 10; // مبالغ فيها

    // 🔍 تحليل النوع
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
