import React from 'react'

const Main = ({ tasks, removeTask, completedTask }) => {
    return (
        <div className="main">
            {tasks.length > 0 ? (
                <ul className="task_list">
                    {tasks.map((item, index) => {
                        return (
                            <li className="task_item" key={index}>
                                <div className='task_infor'>
                                    <div className="task_check" onClick={() => completedTask(item.id)}>
                                        {item.status === true ? (
                                            <i className='bx bx-check'></i>
                                        ): ''}
                                    </div>
                                    <span
                                        className={item.status ? 'completed' : ''}
                                    >{item.name}</span>
                                </div>
                                <i
                                    className='bx bx-x'
                                    onClick={() => removeTask(item.id)}
                                >
                                </i>
                            </li>
                        )
                    })}
                </ul>
            ): (<p className='no-task'>No task</p>)}
        </div>
    )
}

export default Main