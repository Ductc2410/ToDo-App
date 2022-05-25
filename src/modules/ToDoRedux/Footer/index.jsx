import React, {  useState ,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { removeCompletedTask } from '../../../store/actions';

const Footer = ({ tasks }) => {
    const dispatch = useDispatch()
    const [tasksLeft, setTasksLeft] = useState(0);

    useEffect(() => {
        const count = tasks.reduce((count, task) => {
            if(!task.status){
                return count+=1
            }
            return count
        }, 0)
        setTasksLeft(count)
    }, [tasks]);

    return (
        <div className='footer'>
            <span>{tasksLeft} items left</span>

            <span
                className='clear'
                onClick={() => dispatch(removeCompletedTask())}
            >Clear completed</span>
        </div>
    )
}

export default Footer