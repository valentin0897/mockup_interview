from fastapi import APIRouter, Depends, HTTPException
from rest.tag.model import tagModel
from rest.tag.schema import tagSchema as schema
from sqlalchemy.orm import Session
from db.db import get_db

router = APIRouter(
    prefix="/tag",
    tags=["tag"]
)

@router.get("/")
def get_all_tags(db: Session = Depends(get_db)):
    return tagModel.get_all_tags(db)

@router.get("/{tag_id}")
def get_tag(tag_id: int, db: Session = Depends(get_db)):
    return tagModel.get_tag_by_id(db, tag_id)

@router.post("/", response_model=schema.TagCreate)
def create_tag(tag: schema.TagBase, db: Session = Depends(get_db)):
    return tagModel.create_tag(db, tag)

@router.put("/{tag_id}")
def update_tag(tag_id: int, tag: schema.TagBase, db: Session = Depends(get_db)):
    return tagModel.update_tag(db, tag_id, tag)

@router.delete("/{tag_id}")
def delete_tag(tag_id: int, db: Session = Depends(get_db)):
    return tagModel.delete_tag(db, tag_id)