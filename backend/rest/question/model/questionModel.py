from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship, Session

from ....db import Base,engine

class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)
    question = Column(String)
    
    class Config:
        orm_mode = True

def get_question(db: Session, question_id: int):
    return db.query(Question).filter(Question.id == question_id).first()