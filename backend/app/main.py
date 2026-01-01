from fastapi import FastAPI
from .db.session import init_db
app = FastAPI()

@app.on_event("startup")
async def startup():
    init_db()

@app.get('/')
def root_api():
    return {"message": "root api"}

