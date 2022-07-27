import { ClipboardText } from 'phosphor-react'


import TasksHeader from './TasksHeader'
import Task from './Task'

import styles from '../styles/TaskList.module.css'

export default function TaskList({ data, deleteTask, finishTask, tasksState}) {
    if(data.length === 0) {
        return (
            <div className={styles.taskWrapper}>
                <TasksHeader taskArr={data}/>
                <div className={styles.taskEmpty}>
                    <ClipboardText size={56} />
                    <div className={styles.emptyText}>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.taskWrapper}>
                <TasksHeader taskArr={data}/>
                <div className={styles.data}>
                    {data.map((task, index) => {
                        return <div key={index}><Task taskId={task.id} isChecked={task.isChecked} title={task.title} deleteTask={deleteTask} finishTask={finishTask}/></div>
                    })}
                </div>
            </div>
        )
    }
    
}