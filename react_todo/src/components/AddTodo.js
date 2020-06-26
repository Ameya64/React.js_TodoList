import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = { 
        title:' '
    }

    addTodo = (e) => this.setState({title : e.target.value})

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{display: 'flex'}}>
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

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
