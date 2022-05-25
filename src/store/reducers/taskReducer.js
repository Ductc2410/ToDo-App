import * as Types from "../constants";

const inittialState = {
    tasks: []
}

const taskReducer = (state = inittialState, action) => {
    switch(action.type) {
        case Types.ADD_TASK: {
            return {
                tasks: [
                    action.payload,
                    ...state.tasks
                ]
            }
        };

        case Types.COMPLETED_TASK: {
            const newTasks = state.tasks.map(task => {
                if(task.id === action.payload) {
                    return {
                        ...task,
                        status: !task.status
                    }
                }else{
                    return task
                }
            })
            return {
                tasks: newTasks
            }
        };

        case Types.REMOVE_TASK: {
            const newTasks = state.tasks.filter(task => task.id !== action.payload)

            return {
                tasks: newTasks
            }
        };

        case Types.REMOVE_COMPLETED_TASK: {
            const newTasks = state.tasks.filter(task => !task.status)

            return {
                tasks: newTasks
            }
        };

        default: 
            return state;
    }
}

export default taskReducer
