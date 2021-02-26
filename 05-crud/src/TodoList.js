import React from 'react'

export default class TodoList extends React.Component{
    state={
        tasks:[
            {
                'id': 12345,
                'title':'Wash the car',
                'done':true
            }
        ],
        newTaskTitle:''
    }
    renderTaskList=()=>{
        let acc=[];
        for (let t of this.state.tasks){
        acc.push(<div key={t.id}>
            {t.title}
            <input type='checkbox' checked={t.done} onChange={()=>{this.updateTaskCheckBox(t)}}/>
        </div>)
        }
        return acc
    }
    render(){
        return <React.Fragment>
            <h1>Add New Task</h1>
            <div>
                <label>Title:</label>
                <input type='text' name='title' value={this.state.newTaskTitle} onChange={this.updateTaskTitle}/>
            </div>
            <button onClick={this.addTask} >Add</button>
            <h1>Task List:</h1>
            {this.renderTaskList()}
        </React.Fragment>
    }

    updateTaskTitle=event=>{
        this.setState({
            newTaskTitle:event.target.value
        })
    }

    addTask=event=>{
        let newTask={
            id:Math.floor(Math.random()*999999+100000),
            title:this.state.newTaskTitle,
            done:false
        }

        let clone=[...this.state.tasks];
        clone.push(newTask)
        this.setState({
            tasks:clone
        })
    }

    updateTaskCheckBox(task){
        let clonedTask={...task}
        clonedTask.done=!clonedTask.done
        let clonedArray=[...this.state.tasks]
        let index = this.state.tasks.findIndex(function(eachTask){
            return eachTask.id==task.id
        })
        clonedArray[index]=clonedTask

        this.setState({
            tasks:clonedArray
        })
    }
}