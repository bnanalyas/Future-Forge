from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route("/analyze", methods=["POST"])
def analyze():
    # نستقبل الملف (حتى لو ما نستخدمه الآن)
    uploaded_file = request.files.get("file")

    # نحاكي تحليل الذكاء الاصطناعي
    risk_score = random.randint(1, 100)

    if risk_score > 80:
        risk_level = "High"
    elif risk_score > 50:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return jsonify({
        "risk_score": risk_score,
        "risk_level": risk_level
    })

if __name__ == "__main__":
    app.run()

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # ← This allows all frontend origins
@app.route('/analyze-id', methods=['POST'])
def analyze_id():
    # Dummy response
    print("current response is ")
    return jsonify({"status": "ok", "result": "غير مشتبه به", "confidence": 0.93})

if __name__ == '__main__':
    app.run(port=5000)
