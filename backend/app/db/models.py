from sqlalchemy import Column, Integer, String, ForeignKey, Text, DateTime
from sqlalchemy import func
from .base import Base


class User(Base):
    __tablename__ = "project"

    id = Column(Integer, primary_key=True)
    title = Column(String(200), nullable=False)
    description = Column(Text, nullable=False)
    tech_stack = Column(String(200), nullable=False)
    repo_url = Column(String(200), nullable=False)
    created_at = Column(DateTime(timezone=True), default=func.now())
