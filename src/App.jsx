import { useEffect, useState } from "react"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import ShowTask from "./components/ShowTask"
import './App.css'
import { motion } from 'framer-motion'

const App = () => {
  //value = JSON.parse(localStorage.getItem("key"))
  const [theme, setTheme] = useState('light');
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || [])
  const [task, setTask] = useState("")
  const [editid, setEditid] = useState(0);

 
  useEffect(() => {
    // localStorage.setItem("key","value")
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editid) {
      const date = new Date();
      const selectedTask = tasklist.find(task => task.id === editid);
      const updateTask = tasklist.map((e) => (e.id === selectedTask.id ? (e = { id: e.id, name: task, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }) : { id: e.id, name: e.name, time: e.time }));
      setTasklist(updateTask);
      setEditid(0);
      setTask("");
      return;
    }
    if (task) {
      const date = new Date();
      setTasklist([...tasklist, { id: date.getTime(), name: task, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }]);
      setTask("");
    }

  }
  const handleEdit = (id) => {
    const selectedTask = tasklist.find(task => task.id === id);
    setTask(selectedTask.name);
    setEditid(id);
  }
  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter(task => task.id !== id);
    setTasklist(updatedTasklist);
  }
  return (
    <motion.div className="app" >
      <Header theme={theme} setTheme={setTheme} />
      <AddTask handleSubmit={handleSubmit} editid={editid} task={task} setTask={setTask} />
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} handleEdit={handleEdit} handleDelete={handleDelete} />
    </motion.div>
  )
}

export default App