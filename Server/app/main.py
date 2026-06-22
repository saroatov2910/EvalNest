from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.models import property, evaluation
from app.routers import property as property_router 

Base.metadata.create_all(bind=engine)

app = FastAPI(title="EvalNest API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(property_router.router) 

@app.get("/health")
def health():
    return {"status": "ok"}
