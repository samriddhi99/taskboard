from fastapi import APIRouter, HTTPException
from backend.models import Task

router = APIRouter()
tasks = []

@router.get("/tasks")
def get_tasks():
    return tasks

@router.post("/tasks")
def create_task(task: Task):
    tasks.append(task)
    return task

@router.put("/tasks/{task_id}")
def update_task(task_id: int, updated: Task):
    for i, t in enumerate(tasks):
        if t.id == task_id:
            tasks[i] = updated
            return updated
    raise HTTPException(status_code=404, detail="Task not found")
