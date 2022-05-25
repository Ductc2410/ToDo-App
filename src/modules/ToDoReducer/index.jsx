import { useState, useReducer } from "react";
import produce from "immer";

import Header from './Header'
import Main from "./Main";

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return produce(state, draft => {
                draft.push(action.payload)
            })
        case 'REMOVE_TASK': {
            return produce(state, draft => {
                draft.forEach((task, index) => {
                    if(task.id === action.payload){
                        draft.splice(index, 1)
                        return
                    }
                });
            })
        }
        case 'COMPLETED_TASK': {
            return produce(state, draft => {
                draft.forEach(task => {
                    if(task.id === action.payload){
                        task.status = !task.status
                    }
                });
            })
        }
        default: {
            return state
        }
    }
}

function ToDoReducer() {
    const [tasks, dispatch] = useReducer(reducer, [])

    function createTask(task) {
        dispatch({
            type: 'ADD_TASK',
            payload: task
        })
    }

    function removeTask(id) {
        dispatch({
            type: 'REMOVE_TASK',
            payload: id
        })
    }

    function completedTask(id) {
        dispatch({
            type: 'COMPLETED_TASK',
            payload: id
        })
    }

    return (
        <div className="app">
            <Header
                createTask={createTask}
            />

            <Main
                tasks={tasks}
                removeTask={removeTask}
                completedTask={completedTask}
            />
        </div>
    )
}

export default ToDoReducer
