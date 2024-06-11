from pydantic import BaseModel

class TodoBase(BaseModel):
    id: int
    todo: str
    completed: bool

class TodoCreate(BaseModel):
    todo: str
    start: int
    end: int
    completed : bool

class TodoUpdate(BaseModel):
    id: int
    completed : bool

class Todo(TodoBase):
    id: int

    class Config:
        orm_mode = True


class DailyCommentCreate(BaseModel):
    date:    int
    comment: str