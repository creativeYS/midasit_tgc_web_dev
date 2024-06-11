from sqlalchemy import Column, Integer, String, Boolean
from app.database import Base

class Todo(Base):
    __tablename__ = "todos"
    id = Column(Integer, primary_key=True, autoincrement=True)
    todo = Column(String(255))
    start = Column(Integer)
    end = Column(Integer)
    completed = Column(Boolean)

class TodoDailyComment(Base):
    __tablename__ = "TodoDailyComment"
    date = Column(Integer, primary_key=True)
    comment = Column(String(255))