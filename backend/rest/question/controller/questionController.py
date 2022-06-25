from fastapi import APIRouter, Depends, HTTPException
from rest.question.model import questionModel
from rest.question.schema import questionSchema as schema
from sqlalchemy.orm import Session
from db.db import get_db

router = APIRouter(
    prefix="/question",
    tags=["question"]
)

@router.get("/")
def get_all_questions(db: Session = Depends(get_db)):
    return questionModel.get_all_questions(db)

@router.get("/{question_id}")
def get_question(question_id: int, db: Session = Depends(get_db)):
    return questionModel.get_question_by_id(db, question_id)

@router.post("/", response_model=schema.QuestionCreate)
def create_question(question: schema.QuestionBase, db: Session = Depends(get_db)):
    return questionModel.create_question(db, question)

@router.put("/{question_id}")
def update_question(question_id: int, question: schema.QuestionBase, db: Session = Depends(get_db)):
    return questionModel.update_question(db, question_id, question)

@router.delete("/{question_id}")
def delete_question(question_id: int, db: Session = Depends(get_db)):
    return questionModel.delete_question(db, question_id)