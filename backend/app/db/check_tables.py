from sqlalchemy import inspect
from .session import engine

insp = inspect(engine)

print("Tables in DB:", insp.get_table_names())
