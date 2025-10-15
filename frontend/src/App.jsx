import { useState, useEffect } from 'react'
import { getTasks } from './api'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks().then(setTasks)
  }, [])

  return (
    <div>
      <h1>Taskboard</h1>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
