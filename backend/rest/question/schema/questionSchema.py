from rest.base.base_schema import BaseSchema

class QuestionBase(BaseSchema):
    question: str

class QuestionCreate(BaseSchema):
    id: int
    question: str