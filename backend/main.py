from fastapi import FastAPI

from db.db import Base, engine
from rest.question.controller.questionController import router as question_router

app = FastAPI()

app.include_router(question_router)

@app.get("/")
async def root():
    return {"message": "Hello World"}

Base.metadata.create_all(engine)