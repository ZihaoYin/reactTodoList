import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTask from "./components/AddTask";

function App(){
  const [showAddTask, setShowAddTask] = useState(true)

  const [tasks, setTasks] =  useState([
    {
      id:1,
      text: "Doctor Appointment",
      day:"Feb 5th at 2:30pm",
      reminder: true,
    },{
      id:2,
      text:'Meeting at School',
      day:"Feb 5th at 2:30pm",
      reminder: false,
    }
  ])

  //Add Task
const addTask = (task) =>{
  const id = Math.floor(Math.random()*10000) +1 
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}

  //Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task)=> task.id === id ? {...task,reminder: !task.reminder}:task))
  }

  const showAddTaskHelper = ()=>{
    setShowAddTask(!showAddTask)
    console.log(showAddTask)
  }

  return (
    <div className="container">
      <Header
          onAdd={showAddTaskHelper}
          showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> : 'No Tasks To Show' }
  
    </div>
  );
}

export default App;
