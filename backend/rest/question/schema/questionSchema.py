from rest.base.base_schema import BaseSchema

class QuestionBase(BaseSchema):
    question: str
    tag_id: int

class QuestionCreate(BaseSchema):
    id: int
    question: str
    tag_id: int