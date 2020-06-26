import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
style = () => {
    return {
        background: 'F6F6F6',
        color: 'white',
        padding: '10px',
        borderBottom: '1px solid green',
        textDecoration: this.props.todoitem.completed ? 'line-through' : 'none',
        opacity: '0.7'
    }
}
    

    render() {
        const {id, title, completed} = this.props.todoitem
        return (
            <div style={this.style()}>
                <p>
                    <input type="checkbox" checked ={completed} onChange={this.props.isComplete.bind(this,id)}/>
                    {' '}
                    {title}
                    <button className = "delBtn" onClick = {this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todoitem: PropTypes.object.isRequired,
    isComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem
