import { ADD_TASK, COMPLETED_TASK, REMOVE_TASK, REMOVE_COMPLETED_TASK} from '../constants'

export const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const removeTask = id => {
    return {
        type: REMOVE_TASK,
        payload: id
    }
}

export const completedTask = id => {
    return {
        type: COMPLETED_TASK,
        payload: id
    }
}

export const removeCompletedTask = () => {
    return {
        type: REMOVE_COMPLETED_TASK,
    }
}