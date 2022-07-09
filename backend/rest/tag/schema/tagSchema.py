from rest.base.base_schema import BaseSchema

class TagBase(BaseSchema):
    tag: str

class TagCreate(BaseSchema):
    id: int
    tag: str