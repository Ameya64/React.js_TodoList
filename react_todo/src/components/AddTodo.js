import React, { Component } from 'react'

export class AddTodo extends Component {

    state = { 
        title:' '
    }

    addTodo = (e) => this.setState({[e.target.name] : e.target.value})


    render() {
        return (
            <form style = {{display: 'flex'}}>
                <input 
                type = "text" 
                name = "title" 
                placeholder = "Type here..." 
                style = {{flex: '10', padding: '15px', fontSize: '100%'}}
                value = {this.state.title}
                onChange = {this.addTodo}
                />
                
                <input
                type = "submit" 
                value = "Add Task" 
                className = "addTodoBtn"
                style = {{flex: '1', fontSize: '100%'}} 
                />
            </form>
        )
    }
}

export default AddTodo
