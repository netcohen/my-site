import { useState } from "react"
import Header from "./components/Header";
import Tasks  from "./components/Tasks";

const App =() => { 
  const [tasks, setTasks] = useState(
  [
      {
          id: 1,
          text: 'doctors appointment',
          day: 'feb 5th at 2:30pm',
          remainder: true,
      },
      {
          id: 2,
          text: 'meeting at school',
          day: 'feb 6th at 1:30pm',
          remainder: true,
      },
      {
          id: 3,
          text: 'food shopping',
          day: 'feb 5th at 2:30pm',
          remainder: false,
      }
  
  ])

  //delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (
    <div className="container">
      <Header />  
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete= {deleteTask} /> : 'no tasks to show'}
    </div>
  )
}


export default App;
