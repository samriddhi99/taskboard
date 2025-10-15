from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

def test_create_task():
    response = client.post("/tasks", json={"id": 1, "title": "Write code"})
    assert response.status_code == 200
    assert response.json()["title"] == "Write code"
