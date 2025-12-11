function analyze() {
    const fileInput = document.getElementById("fileInput");
    const resultBox = document.getElementById("resultBox");
    const riskEl = document.getElementById("risk");
    const levelEl = document.getElementById("level");

    if (!fileInput.files || fileInput.files.length === 0) {
        alert("فضلاً اختاري صورة المستند");
        return;
    }

    const file = fileInput.files[0];

    // محاكاة ذكاء اصطناعي عبر تحليل حجم الصورة والوضوح
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
        let risk = 0;

        // 1) حساب مستوى الخطورة بناء على دقة الصورة
        const resolutionScore = (img.width * img.height) / 1000000;
        if (resolutionScore < 1) risk += 40; // دقة ضعيفة → اشتباه

        // 2) اسم الملف
        if (file.name.toLowerCase().includes("edited") ||
            file.name.toLowerCase().includes("fake") ||
            file.name.toLowerCase().includes("copy")) {
            risk += 50; // علامات تعديل
        }

        // 3) لو الصورة مقلوبة
        if (img.width < img.height) risk += 20;

        // قص النسبة لو زادت
        if (risk > 100) risk = 100;

        // تحديد مستوى الخطورة
        let level = "منخفض 🟢";
        if (risk > 80) level = "مرتفع 🔴";
        else if (risk > 50) level = "متوسط 🟡";

        // إظهار النتيجة
        riskEl.innerText = "درجة الخطورة: " + risk + "%";
        levelEl.innerText = "التقييم: " + level;
        resultBox.style.display = "block";
    };
}
