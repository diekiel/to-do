import { useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import  { v4 as uuid } from 'uuid'

import styles from './styles/App.module.css'

import Header from './components/Header'
import TaskList from './components/TaskList'


export default function App() {

  const [ tasks, setTasks] = useState([])
  const [ taskValue, setTaskValue ] = useState("")

  const handleTaskChange = (event) => {
    event.target.setCustomValidity('')
    setTaskValue(event.target.value)

  }

  const handleCreateTask = (event) => {
    event.preventDefault()
    setTasks([...tasks, {
      id: uuid(),
      isChecked: false,
      title: taskValue
    }])
    setTaskValue("")
  }

  const onDeleteTask = (taskIdToDelete) => {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskIdToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  const finishTask = (id) => {
    const newTasks = tasks.map((task) => {
      if(task.id === id && task.isChecked === true) {
        return {...task, isChecked: false}
      } else if (task.id === id && task.isChecked === false) {
        return {...task, isChecked: true}
      } else {
        return task
      }
    })
    setTasks(newTasks)
  }

  return (
    <div className={styles.App}>
      <Header />
      <form 
        onSubmit={handleCreateTask}
        className={styles.inputWrapper}
      >
        <input className={styles.textInput} onChange={handleTaskChange} value={taskValue} type="text" name="task" placeholder="Adicione uma nova tarefa" required/>
        <button type="submit" className={styles.button}>
          Criar <PlusCircle size={18}/>
        </button>
      </form>
      <TaskList data={tasks} deleteTask={onDeleteTask} finishTask={finishTask} tasksState={setTasks}/>
    </div>
  )
}
