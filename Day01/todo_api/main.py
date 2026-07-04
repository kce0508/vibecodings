from pathlib import Path
from typing import List

from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from pydantic import BaseModel, Field

app = FastAPI(title="TODO API", version="1.0.0")
BASE_DIR = Path(__file__).resolve().parent


class TodoCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=100, description="할 일 제목")


class TodoUpdate(BaseModel):
    completed: bool = Field(..., description="완료 여부")


class Todo(BaseModel):
    id: int
    title: str
    completed: bool


# 메모리에 TODO를 저장합니다.
todos: List[Todo] = []
next_id = 1


def find_todo_index(todo_id: int) -> int:
    for index, todo in enumerate(todos):
        if todo.id == todo_id:
            return index
    return -1


@app.get("/", response_class=HTMLResponse)
def root():
    html_path = BASE_DIR / "index.html"
    return HTMLResponse(html_path.read_text(encoding="utf-8"))


@app.get("/todos", response_model=List[Todo])
def get_todos():
    return todos


@app.post("/todos", response_model=Todo, status_code=201)
def create_todo(todo: TodoCreate):
    global next_id

    new_todo = Todo(id=next_id, title=todo.title, completed=False)
    todos.append(new_todo)
    next_id += 1

    return new_todo


@app.patch("/todos/{todo_id}", response_model=Todo)
def update_todo(todo_id: int, todo_update: TodoUpdate):
    index = find_todo_index(todo_id)

    if index == -1:
        raise HTTPException(status_code=404, detail="TODO를 찾을 수 없습니다.")

    todos[index].completed = todo_update.completed
    return todos[index]


@app.delete("/todos/{todo_id}", status_code=204)
def delete_todo(todo_id: int):
    index = find_todo_index(todo_id)

    if index == -1:
        raise HTTPException(status_code=404, detail="TODO를 찾을 수 없습니다.")

    todos.pop(index)
    return None


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)
