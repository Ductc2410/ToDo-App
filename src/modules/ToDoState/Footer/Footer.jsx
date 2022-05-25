import React, { useEffect, useState } from 'react'

const Footer = ({ tasks, removeTasksCompleted }) => {
    const [tasksLeft, setTasksLeft] = useState(0);
    
    
    useEffect(() => {
        const count = tasks.reduce((count, task) => {
            if(!task.status){
                return count+=1
            }
            return count
        }, 0)
        setTasksLeft(count)

    }, [tasks]);

    return (
        <div className='footer'>
            <span>{tasksLeft} items left</span>

            <span
                className='clear'
                onClick={removeTasksCompleted}
            >Clear completed</span>
        </div>
    ) 
}

export default Footer