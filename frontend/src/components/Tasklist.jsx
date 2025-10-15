function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id}>
          {t.title} {t.done ? "✅" : "❌"}
        </li>
      ))}
    </ul>
  )
}

export default TaskList
