from datetime import datetime
from pydantic import BaseModel, EmailStr, Field, field_validator
from typing import Optional, Literal


class InquiryResponse(BaseModel):
    id: int
    inquirytype: str
    name: str
    email: str
    company: Optional[str] = None
    message: Optional[str] = None
    
    class Config:
        from_attributes = True  # This is important! Allows conversion from SQLAlchemy

class InquiryCreate(BaseModel):
    inquirytype :Literal["friend","hr"]
    name : str
    email : EmailStr
    company : Optional[str] = None
    message : Optional[str] = None


    @field_validator('company')
    def company_required_for_hr(cls, v, info):
        if info.data.get('inquirytype') == 'hr' and not v:
            raise ValueError('Company is required for HR inquiries')
        return v