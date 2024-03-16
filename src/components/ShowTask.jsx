import AddTask from "./AddTask"
const ShowTask = ({ tasklist, setTasklist, handleEdit, handleDelete }) => {
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={(e) => {
          setTasklist([])
        }}>Clear All</button>
      </div>
      <ul>
        {tasklist.map((task) => {
          return <li key={task.id} className="list_item">
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span></p>
            <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
            <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
          </li>
        })
        }
      </ul>
    </section>
  )
}

export default ShowTask