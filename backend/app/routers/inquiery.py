from http.client import HTTPException
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.db import models
from app.schemas.inquiry import InquiryCreate, InquiryResponse


router = APIRouter(prefix="/inquiries", tags=["inquiries"])


@router.get("", response_model=dict)
def get_inquiries(db: Session = Depends(get_db)):
        try:        
            inquiries = db.query(models.Inquiry).all()
            inquiry_responses = [InquiryResponse.model_validate(inquiry) for inquiry in inquiries]
            return {"inquiries": inquiry_responses}
        except Exception as e:
                return "Error is " + str(e)


@router.post("", response_model=dict)
def create_inquiry_endpoint(payload: InquiryCreate, db: Session = Depends(get_db)):
        try:       
            print("Payload received ***************:", payload) 
            inquiry = models.Inquiry(**payload.model_dump())
            db.add(inquiry)
            db.commit()
            db.refresh(inquiry)
            return {"message": "Inquiry created successfully", "inquiry_id": inquiry.id}
        except Exception as e:
              return HTTPException(status_code=400, detail=str(e))