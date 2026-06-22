import os
from inference_sdk import InferenceHTTPClient

api_key = os.getenv("ROBOFLOW_API_KEY")

if not api_key:
    raise ValueError("ROBOFLOW_API_KEY is missing from .env")

client = InferenceHTTPClient(
    api_url="https://serverless.roboflow.com",
    api_key=api_key
)

def analyze_apartment(image_url: str) -> dict:
    try:
        result = client.run_workflow(
            workspace_name="alex-ross-abfti",
            workflow_id="general-segmentation-api",
            images={"image": image_url},
            parameters={"classes": "Carcks_present"},
            use_cache=True
        )

        # הסר תמונות base64 מהתוצאה — רק נתונים
        def clean_result(obj):
            if isinstance(obj, dict):
                return {k: clean_result(v) for k, v in obj.items()
                        if k not in ["image", "visualization"]}
            if isinstance(obj, list):
                return [clean_result(i) for i in obj]
            if isinstance(obj, str) and len(obj) > 200:
                return "[image data]"
            return obj

        return {"success": True, "data": clean_result(result)}
    except Exception as e:
        return {"success": False, "error": str(e)}
