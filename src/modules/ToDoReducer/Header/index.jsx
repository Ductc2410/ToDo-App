import React, { useRef, useState } from 'react'
import { nanoid } from 'nanoid';

const Header = ({ createTask }) => {
    const [task, setTask] = useState();
    const inputRef = useRef()

    const handleClick = () => {
        if(task){
            createTask({
                id: nanoid(),
                name: task,
                status: false
            })

            inputRef.current.value = ''
            setTask()
        }else{
            inputRef.current.focus()
        }
    }

    return (
        <React.Fragment>
            <div className="header">
                <h1 className="header_title">Todo App - useReducer</h1>

                <div className='todo_form'>
                    <input
                        type="text"
                        name='task'
                        className='todo_create'
                        placeholder='What needs to be done ?'
                        onChange={e => setTask(e.target.value)}
                        ref={inputRef}
                    />

                    <i
                        className='bx bx-plus-medical'
                        onClick={() => handleClick()}
                    ></i>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header