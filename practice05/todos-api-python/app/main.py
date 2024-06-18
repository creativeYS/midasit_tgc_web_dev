from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Query
from app import crud, database, models, schema

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.on_event("startup")
def startup_event():
    database.create_tables()

@app.get("/")
async def root():
    return RedirectResponse(url="/todo/")

@app.get("/todo")
async def get_todos(db: Session = Depends(get_db)):
    todos = crud.get_todos(db)
    return todos

@app.get("/todo/{todo_id}")
async def get_todo(todo_id: int, db: Session = Depends(get_db)):
    todo = crud.get_todo(db, todo_id)
    if todo is None:
        raise HTTPException(status_code=404, detail="todo not found")
    return todo

@app.get("/todo/done/")
async def get_todo(todo_done: bool = Query(True), db: Session = Depends(get_db)):
    todos = crud.get_todo_done(db, todo_done)
    if not todos:
        raise HTTPException(status_code=404, detail="todos not found")
    return todos

@app.get("/todo/bookmark")
async def get_todo_bookmark(db: Session = Depends(get_db)):
    todos = crud.get_todo_bookmarked(db)
    if not todos:
        raise HTTPException(status_code=404, detail="todos not found")
    return todos

@app.post("/todo")
async def create_todo(todo: schema.TodoCreate, db: Session = Depends(get_db)):
    crud.create_todo(db, todo)

@app.put("/todo")
async def update_todo(updated_todo: schema.TodoUpdate, db: Session = Depends(get_db)):
    db_todo = crud.get_todo(db, updated_todo.id)
    if db_todo is None:
        raise HTTPException(status_code=404, detail="todo not found")
    crud.update_todo(db, db_todo, updated_todo)

@app.put("/todo/content")
async def update_todo(updated_todo: schema.TodoContentUpdate, db: Session = Depends(get_db)):
    db_todo = crud.get_todo(db, updated_todo.id)
    if db_todo is None:
        raise HTTPException(status_code=404, detail="todo not found")
    crud.update_todo(db, db_todo, updated_todo)

@app.put("/todo/done")
async def update_todo(updated_todo: schema.TodoDoneUpdate, db: Session = Depends(get_db)):
    db_todo = crud.get_todo(db, updated_todo.id)
    if db_todo is None:
        raise HTTPException(status_code=404, detail="todo not found")
    crud.update_todo(db, db_todo, updated_todo)

@app.put("/todo/duedate")
async def update_todo(updated_todo: schema.TodoDuedateUpdate, db: Session = Depends(get_db)):
    db_todo = crud.get_todo(db, updated_todo.id)
    if db_todo is None:
        raise HTTPException(status_code=404, detail="todo not found")
    crud.update_todo(db, db_todo, updated_todo)

@app.put("/todo/bookmark")
async def update_todo(updated_todo: schema.TodoBookmarkUpdate, db: Session = Depends(get_db)):
    db_todo = crud.get_todo(db, updated_todo.id)
    if db_todo is None:
        raise HTTPException(status_code=404, detail="todo not found")
    crud.update_todo(db, db_todo, updated_todo)

@app.delete("/todo/{todo_id}")
async def delete_todo(todo_id: int, db: Session = Depends(get_db)):
    db_todo = crud.get_todo(db, todo_id)
    if db_todo is None:
        raise HTTPException(status_code=404, detail="todo not found")
    crud.delete_todo(db, db_todo)
    return {"message": "todo deleted successfully"}