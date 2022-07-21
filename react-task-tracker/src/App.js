import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App=() => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Eat',
        day: 'July 21st at 3pm',
        reminder: true,
    
      },
    
      {
        id: 2,
        text: 'Sleep',
        day: 'July 22nd at 11pm',
        reminder: true,
    
      },
    
      {
        id: 3,
        text: 'Bathe',
        day: 'July 23rd at 9pm',
        reminder: false,
    
      }      
    ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> 
    task.id === id ? {...task, reminder: !task.reminder
    }: task))
  }

  return (
    <div className='container'>
     <Header />
     {tasks.length > 0 ?
     <Tasks tasks={tasks}  
     onDelete={deleteTask} onToggle={toggleReminder}/> :
      ('Screen Is Empty')}
    </div>
  );
}

export default App;
