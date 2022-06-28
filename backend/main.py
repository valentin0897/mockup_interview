from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import frontend_url

from db.db import Base, engine
from rest.question.controller.questionController import router as question_router

app = FastAPI()

origins = [
    frontend_url
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(question_router)

@app.get("/")
async def root():
    return {"message": "Hello World"}

Base.metadata.create_all(engine)