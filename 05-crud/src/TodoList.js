import React from 'react'

export default class TodoList extends React.Component {
    state = {
        tasks: [
            {
                'id': 12345,
                'title': 'Wash the car',
                'done': true
            }
        ],
        newTaskTitle: '',
        editedTaskTitle: '',
        editedTaskId:'',
        editingTask: false,
        editedTaskDone: false
    }
    renderTaskList = () => {
        let acc = [];
        for (let t of this.state.tasks) {
            acc.push(<div key={t.id}>
                {t.title}
                <input type='checkbox' checked={t.done} onChange={() => { this.updateTaskCheckBox(t) }} />
                <button onClick={() => { this.editTask(t) }}>Edit</button>
                <button onClick={() => { this.deleteTask(t) }}>Delete</button>
            </div>)
        }
        return acc
    }
    render() {
        return <React.Fragment>
            <h1>Add New Task</h1>
            <div>
                <label>Title:</label>
                <input type='text' name='title' value={this.state.newTaskTitle} onChange={this.updateTaskTitle} />
            </div>
            <button onClick={this.addTask} >Add</button>
            <h1>Task List:</h1>
            {this.renderTaskList()}
            <div id='popup' style={{ display: this.state.editingTask ? 'block' : 'none' }}>
                <div>
                    <label>Title:</label>
                    <input type='text' value={this.state.editedTaskTitle} name='editedTaskTitle' onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Done:</label>
                    <input type='checkbox' checked={this.state.editedTaskDone} name='editedTaskDone' onChange={this.updateCheckBox} />
                </div>
                <button onClick={() => {
                    this.setState({
                        editingTask: false
                    });
                    this.updateTask()
                }}>OK</button>

            </div>
        </React.Fragment>
    }

    updateTaskTitle = event => {
        this.setState({
            newTaskTitle: event.target.value
        })
    }

    addTask = event => {
        let newTask = {
            id: Math.floor(Math.random() * 999999 + 100000),
            title: this.state.newTaskTitle,
            done: false
        }

        let clone = [...this.state.tasks];
        clone.push(newTask)
        this.setState({
            tasks: clone
        })
    }

    updateTaskCheckBox(task) {
        let clonedTask = { ...task }
        clonedTask.done = !clonedTask.done
        let clonedArray = [...this.state.tasks]
        let index = this.state.tasks.findIndex(function (eachTask) {
            return eachTask.id == task.id
        })
        clonedArray[index] = clonedTask

        this.setState({
            tasks: clonedArray
        })
    }

    deleteTask = (taskToDelete) => {
        let index = this.state.tasks.findIndex(t => t.id === taskToDelete.id)
        let clonedArray = [
            ...this.state.tasks.slice(0, index),
            ...this.state.tasks.slice(index + 1)

        ]
        this.setState({
            tasks: clonedArray
        })

    }

    editTask = (task) => {
        this.setState({
            editingTask: true,
            editedTaskTitle: task.title,
            editedTaskDone: task.done,
            editedTaskId: task.id
        })

    }

    updateFormField = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateCheckBox=event=>{
        this.setState({
            [event.target.name]:event.target.checked
        })
    }

    updateTask=event=>{
        let newTask={
            'id':this.state.editedTaskId,
            'title':this.state.editedTaskTitle,
            'done':this.editedTaskDone
        }
        let clonedArray=this.state.tasks.map(function(eachTask){
            if(eachTask.id!=newTask.id){
                return eachTask
            }else{
                return newTask
            }
        })
        this.setState({
            tasks:clonedArray
        })
        
    }


}