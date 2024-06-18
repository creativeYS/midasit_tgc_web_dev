from pydantic import BaseModel
from datetime import date

class TodoBase(BaseModel):
    id: int
    content: str
    done: bool

class TodoCreate(BaseModel):
    content: str

class TodoUpdate(BaseModel):
    id: int
    content: str
    done: bool
    duedate: date
    bookmark: bool
    memo: str

class TodoContentUpdate(BaseModel):
    id: int
    content: str

class TodoDoneUpdate(BaseModel):
    id: int
    done: bool

class TodoBookmarkUpdate(BaseModel):
    id: int
    bookmark: bool

class TodoDuedateUpdate(BaseModel):
    id: int
    duedate: date

class Todo(TodoBase):
    id: int

    class Config:
        orm_mode = True