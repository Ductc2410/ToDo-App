import React, {  useEffect ,useRef } from 'react'
import { useSelector } from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'

const ToDoRedux = () => {
    const { tasks } = useSelector(state => state.tasks)
    const appRef = useRef()

    return (
        <div className="app" ref={appRef}>
            <Header tasks={tasks}/>
            <Main tasks={tasks}/>
            {
                tasks.length > 0 && <Footer tasks={tasks}/>
            }
        </div>
    )
}

export default ToDoRedux