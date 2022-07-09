from sqlalchemy import Column, Integer, String, select
from sqlalchemy.orm import Session
from rest.tag.schema.tagSchema import TagBase

from db.db import Base

class Tag(Base):
    __tablename__ = "tags"

    id = Column(Integer, primary_key=True, index=True)
    tag = Column(String)

def get_all_tags(db: Session) -> list:
    return db.execute(select(Tag)).scalars().all()

def get_tag_by_id(db: Session, tag_id: int) -> Tag | None:
    return db.execute(select(Tag).filter(Tag.id == tag_id)).scalar()

def create_tag(db: Session, tagModel: TagBase) -> Tag:
    db_tag = Tag(tag=tagModel.tag)
    db.add(db_tag)
    db.commit()
    db.refresh(db_tag)
    return db_tag

def update_tag(db: Session, tag_id: int, tagModel: TagBase):
    stmt = select(Tag).filter(Tag.id == tag_id)
    db_tag = db.scalar(stmt)
    db_tag.tag = tagModel.tag
    db.commit()
    db.refresh(db_tag)
    return db_tag

def delete_tag(db: Session, tag_id: int):
    stmt = select(Tag).filter(Tag.id == tag_id)
    db_tag = db.scalar(stmt)
    db.delete(db_tag)
    db.commit()