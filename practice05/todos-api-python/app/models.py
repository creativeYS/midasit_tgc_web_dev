from sqlalchemy import Column, Integer, String, Boolean, DATE, TEXT
from app.database import Base
from datetime import date

class Todo(Base):
    __tablename__ = "todos"
    id = Column(Integer, primary_key=True, autoincrement=True)
    content = Column(String(255), default="Todo")
    done = Column(Boolean, default=False)
    duedate = Column(DATE, default=date.today)
    bookmark = Column(Boolean, default=False)
    memo = Column(TEXT, default="")