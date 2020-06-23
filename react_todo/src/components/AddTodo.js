import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <form style = {{display: 'flex'}}>
                <input 
                type = "text" 
                name = "title" 
                placeholder = "Type here..." 
                style = {{flex: '10', padding: '15px', fontSize: '100%'}}
                />
                <input
                type = "submit" 
                value = "Add Task" 
                className = "addTodoBtn"
                style = {{flex: '1', fontSize: '100%', background: '#d1d1d1'}} 
                />
            </form>
        )
    }
}

export default AddTodo
