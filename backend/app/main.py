from app.db.base import Base
from app.db.session import engine
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from .db.session import init_db

from app.routers.inquiery import router as inquiry_router

from dotenv import load_dotenv
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*",
        "http://34.195.34.207:3000",
        "https://your-netlify-site.netlify.app"
        "http://localhost:3000",
        "http://localhost",
        
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.on_event("startup")
async def startup():
    Base.metadata.create_all(bind=engine)
    # Base.metadata.drop_all(bind=engine)  # Drops all tables only use if change in table columns or field chnages
    Base.metadata.create_all(bind=engine)

@app.get("/")
def health_check():
    return {"status": "ok"}

@app.get('/')
def root_api():
    return {"message": "root api"}

app.include_router(inquiry_router)