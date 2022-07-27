import { Trash, CheckCircle, Circle } from 'phosphor-react'

import styles from '../styles/Task.module.css'

export default function Task({ isChecked, title, taskId, deleteTask, finishTask}) {

    const handleDeleteTask = () => {
        deleteTask(taskId)
    }

    const handleFinishTask = (event) => {
        event.preventDefault()
        finishTask(taskId)
    }

    return (
        <div className={styles.taskWrapper}>
            <div className={styles.taskContent}>
                <button onClick={handleFinishTask}>
                    <span className={isChecked ? styles.hidden : styles.unchecked}>
                        <Circle />
                    </span>
                    <span className={isChecked ? styles.checked : styles.hidden}>
                        <CheckCircle weight='fill'/>
                    </span>
                </button>
                <p className={isChecked ? styles.checked : styles.unchecked}>{title}</p>
            </div>
            <button onClick={handleDeleteTask} className={styles.trash}><Trash /></button>
        </div>
    )
}