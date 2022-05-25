import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTask, completedTask } from '../../../store/actions'

const Main = ({ tasks }) => {
    const dispatch = useDispatch()

    return (
        <div className="main">
             {tasks.length > 0 ? (
                <ul className="task_list">
                    {tasks.map((item, index) => {
                        return (
                            <li className="task_item" key={index}>
                                <div className='task_infor'>
                                    <div className="task_check" onClick={() => dispatch(completedTask(item.id))}>
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
                                    onClick={() => dispatch(removeTask(item.id))}
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