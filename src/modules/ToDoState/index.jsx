import { useState } from "react";

import Header from './Header/Header'
import Main from "./Main/Main";
import Footer from "./Footer/Footer";


function ToDoState() {
    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks(prev => [...prev, task])
    }

    function removeTask(id) {
        const newTasks = tasks.filter(task => {
            if(task.id !== id){
                return task
            }
            return
        })

        setTasks(newTasks)
    }

    function removeCompletedTask() {
        const newTasks = tasks.filter(task => {
            return !task.status
        })
        setTasks(newTasks)
    }

    function completedTask(id) {
        const newTasks = tasks.map(task => {
            if(task.id === id){
                return {
                    ...task,
                    status: !task.status
                };
            }
            return task;
        })
        setTasks(newTasks)
    }

    return (
        <div className="app">
            <Header createTask={createTask} />

            <Main
                tasks={tasks} 
                removeTask={removeTask}
                completedTask={completedTask}
            />

            {tasks.length > 0 && 
                <Footer
                    tasks={tasks}
                    removeTasksCompleted={removeCompletedTask}
                />
            }
        </div>
    )
}

export default ToDoState
