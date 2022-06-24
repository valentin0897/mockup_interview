from fastapi import FastAPI
import rest.question.model.questionModel

from db.db import Base, engine

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

Base.metadata.create_all(engine)