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


class Inquiry(Base):
    __tablename__ = "inquiry"

    id = Column(Integer, primary_key=True)
    inquirytype = Column(String(50), nullable=False)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    company = Column(String(100), nullable=True)
    message = Column(Text, nullable=True)
    