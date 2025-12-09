# Mock API Simulation for Future-Forge

import random

def analyze_document(document_name):
    risk_score = random.randint(1, 100)
    risk_level = "Low"
    forgery_detected = False

    if risk_score > 80:
        risk_level = "High"
        forgery_detected = True
    elif risk_score > 50:
        risk_level = "Medium"

    return {
        "document_name": document_name,
        "risk_score": risk_score,
        "risk_level": risk_level,
        "forgery_detected": forgery_detected,
        "notes": "Auto-analysis simulation for demo purposes"
    }

