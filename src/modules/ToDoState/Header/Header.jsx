import React, { useRef, useState } from 'react'
import { nanoid } from 'nanoid';

const Header = ({ createTask }) => {
    const [task, setTask] = useState('');
    const inputRef = useRef()

    const handleClick = () => {
        if(task.trim()){
            createTask({
                id: nanoid(),
                name: task,
                status: false
            })

            setTask('')
            inputRef.current.focus()
        }else{
            setTask('')
            inputRef.current.focus()
        }
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    return (
        <React.Fragment>
            <div className="header">
                <h1 className="header_title">Todo App - State</h1>

                <div className='todo_form'>
                    <input
                        type="text"
                        name='task'
                        className='todo_create'
                        placeholder='What needs to be done ?'
                        onChange={e => handleChange(e)}
                        value={task}
                        ref={inputRef}
                    />

                    <i
                        className='bx bx-plus-medical'
                        onClick={handleClick}
                    ></i>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header