import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';

export default class ToDoClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    createTask = (task) => {
        this.setState({
            tasks: [
                task,
                ...this.state.tasks
            ]
        })
    }

    removeTask = (id) => {
        const newTasks = this.state.tasks.filter(task => {
            if(task.id !== id){
                return task
            }
            return
        })

        this.setState({
            tasks: newTasks
        })
    }

    checkTask = (id) => {
        const newTasks = this.state.tasks.map(task => {
            if(task.id === id){
                return {
                    ...task,
                    status: !task.status
                };
            }
            return task;
        })

        this.setState({
            tasks: newTasks
        })
    }

    render() {
        return (
            <div className="app">
                <Header 
                    tasks={this.state.tasks}
                    createTask={this.createTask}
                />
                <Main
                    tasks={this.state.tasks}
                    removeTask={this.removeTask}
                    checkTask={this.checkTask}
                />
            </div>
        )
    }
}
