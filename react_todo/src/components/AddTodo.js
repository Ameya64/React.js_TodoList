import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <form>
                <input type = "text" name = "title" placeholder = "Add Todo" />
                <input type = "submit" value = "Add Task" class = "addTodo" onClick = "this." />
            </form>
        )
    }
}

export default AddTodo
