import produce from "immer"
import * as Types from "../constants";

const INITIAL_STATE = {
    tasks: []
}
    
const taskReducer_Immer = produce((draft, action) => {
    switch (action.type) {
        case Types.ADD_TASK:
            draft.tasks.push(action.payload)
            break
        case Types.REMOVE_TASK: {
            draft.tasks.forEach((task, index) => {
                if(task.id === action.payload){
                    draft.tasks.splice(index, 1)
                    return
                }
            });
            break
        }
        case Types.COMPLETED_TASK: 
            const task = draft.tasks.find(task => task.id === action.payload)
            task.status = !task.status
            break
        case Types.REMOVE_COMPLETED_TASK:
            draft.tasks.forEach((task, index) => {
                if(task.status){
                    draft.tasks.splice(index, 1)
                }
            });
            break
        default:
            break
    }
}, INITIAL_STATE)


export default taskReducer_Immer