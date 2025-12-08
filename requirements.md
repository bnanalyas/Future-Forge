# AI Fraud Detector for Absher  
**Future-Forge Team**

## 1. Problem Statement  
خدمات أبشر تعتمد على مستندات وصور يرفعها المستخدم، ويتم التحقق منها يدويًا أو بأنظمة تقليدية.  
هذا يسبب:  
- احتمالية رفع مستندات مزينة أو معدّلة  
- تأخير في الإجراءات  
- ضغط على الموظفين  
- صعوبة كشف محاولات الانتحال

## 2. Proposed Solution  
نظام ذكاء اصطناعي يقوم بـ:  
1. تحليل المستندات والصور المرفوعة على أبشر باستخدام Computer Vision.  
2. اكتشاف أي تعديل، تزوير، أو قصّ/لصق داخل المستند.  
3. مقارنة صورة الهوية مع صورة المستخدم الحالية (Face Verification).  
4. رفع نسبة الأمان وتقليل التزوير.  
5. توفير واجهة بسيطة للموظف تظهر مستوى الثقة ودرجة الخطورة.

## 3. Key Features  
- كشف التلاعب (Forgery Detection)  
- مقارنة الوجه (Face Matching)  
- تنبيه تلقائي عند الاشتباه  
- تقرير مختصر للموظف  
- نموذج يمشي On-Device (خفيف وسريع) أو Server-Side حسب الخدمة  
- تكامل كامل مع منصة أبشر

## 4. Target Users  
- موظفو منصة أبشر  
- الجهات الحكومية التي تعتمد على التحقق من الهوية  
- المستخدم النهائي (حماية هويته)

## 5. Technical Components  
### 5.1 AI Model  
- Deep Learning CNN model  
- Facial verification model (FaceNet / ArcFace)  
- Document integrity checker  
- Pipeline للمعالجة (OCR + CV)

### 5.2 Backend  
- REST API هدفها إرسال الصور للنموذج واستلام النتيجة  
- Python FastAPI

### 5.3 Frontend  
- صفحة لرفع المستندات  
- صفحة للنتيجة (risk score + details)

## 6. Project Structure  
- frontend/  
- backend/  
- ai-model/  
- data/  
- docs/  
- assets/

## 7. Expected Impact  
- رفع مستوى الأمن في منصة أبشر  
- تسريع الخدمات بنسبة كبيرة  
- تقليل الاحتيال والتزييف  
- تعزيز مكانة المملكة في الحكومة الرقمية  
- تحسين جودة الحياة الرقمية

