import React, { Component } from 'react'
import { nanoid } from 'nanoid';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.state = {
            task: null
        }
    } 

    handleClick() {
        if(this.state.task){
            this.props.createTask({
                id: nanoid(),
                name: this.state.task,
                status: false
            })

            this.inputRef.current.value = ''
            this.setState({ task: null})
        }else{
            this.inputRef.current.focus()
        }
    }

    render() {
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
                            onChange={e => this.setState({ task: e.target.value })}
                            ref={this.inputRef}
                        />

                        <i
                            className='bx bx-plus-medical'
                            onClick={() => this.handleClick()}
                        ></i>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
