from typing import Any
from sqlalchemy import Column, Integer, String, select
from sqlalchemy.orm import Session
from rest.question.schema.questionSchema import QuestionBase

from db.db import Base

class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)
    question = Column(String)


def get_all_questions(db: Session) -> list:
    return db.execute(select(Question)).all()

def get_question_by_id(db: Session, question_id: int) -> Question | None:
    return db.execute(select(Question).filter(Question.id == question_id)).first()

def create_question(db: Session, questionModel: QuestionBase) -> Question:
    db_question = Question(question=questionModel.question)
    db.add(db_question)
    db.commit()
    db.refresh(db_question)
    return db_question

def update_question(db: Session, question_id: int, questionModel: QuestionBase):
    stmt = select(Question).filter(Question.id == question_id)
    db_question = db.scalar(stmt)
    db_question.question = questionModel.question
    db.commit()
    db.refresh(db_question)
    return db_question

def delete_question(db: Session, question_id: int):
    stmt = select(Question).filter(Question.id == question_id)
    db_question = db.scalar(stmt)
    db.delete(db_question)
    db.commit()