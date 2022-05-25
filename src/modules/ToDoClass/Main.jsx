import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main">
                {this.props.tasks.length > 0 ? (
                    <ul className="task_list">
                        {this.props.tasks.map((item, index) => {
                            return (
                                <li className="task_item" key={index}>
                                    <div className='task_infor'>
                                        <div className="task_check" onClick={() => this.props.checkTask(item.id)}>
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
                                        onClick={() => this.props.removeTask(item.id)}
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
}
