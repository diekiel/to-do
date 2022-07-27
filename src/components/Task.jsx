import { useState } from 'react'

import { Trash, CheckCircle, Circle, FlagBanner } from 'phosphor-react'

import styles from '../styles/Task.module.css'

export default function Task({ isChecked, title, taskId, deleteTask, finishTask}) {
    const [ priority, setPriority ] = useState("")

    const handleDeleteTask = () => {
        deleteTask(taskId)
    }

    const handleFinishTask = (event) => {
        event.preventDefault()
        finishTask(taskId)
    }

    const handlePriorityChange = (event) => {
        setPriority(event.target.value)
        console.log(event.target.value)
    }

    const handleNormal = (event) => {
        setPriority(event.currentTarget.value)
        console.log(event.currentTarget.value)
    }

    const handleOof = (event) => {
        setPriority(event.currentTarget.value)
        console.log(event.currentTarget.value)
    }

    const handleDanger = (event) => {
        setPriority(event.currentTarget.value)
        console.log(event.currentTarget.value)
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
            <div className={styles.taskButtons}>
                <button style={{color: "#E25858", marginRight:"10px"}} value="danger" onClick={handleDanger}>
                    {priority === "danger" ? <FlagBanner weight="fill"/> : <FlagBanner />}
                </button>
                <button style={{color: "#ffd000", marginRight:"10px"}} value="oof" onClick={handleOof}>
                    {priority === "oof" ? <FlagBanner weight="fill"/> : <FlagBanner />}
                </button>
                <button style={{color: "#8284FA", marginRight:"10px"}} value="normal" onClick={handleNormal}>
                    {priority === "normal" ? <FlagBanner weight="fill"/> : <FlagBanner />}
                </button>
                <button onClick={handleDeleteTask} className={styles.trash}><Trash /></button>
            </div>
        </div>
    )
}