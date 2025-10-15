import axios from "axios";

export async function getTasks() {
  const res = await axios.get("http://localhost:8000/tasks");
  return res.data;
}
