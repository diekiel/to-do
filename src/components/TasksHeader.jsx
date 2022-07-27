import styles from '../styles/TasksHeader.module.css'

export default function TasksHeader( {taskArr} ) {
    const numberOfTasksDone = taskArr.filter((task) => {
        if(task.isChecked) {
            return task
        }
    })

    return (
        <div className={styles.header}>
            <div className={styles.createdTasks}>
                <p>
                    Tarefas criadas
                    <span>{taskArr.length}</span>
                </p>
            </div>
            <div className={styles.tasksDone}>
                <p>
                    Concluídas
                    {taskArr.length === 0 ? <span>0</span> : <span>{numberOfTasksDone.length} de {taskArr.length}</span>}
                </p> 
            </div>
        </div>
    )
}