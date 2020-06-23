import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
style = () => {
    return {
        background: '#F6F6F6',
        padding: '10px',
        borderBottom: '1px solid green',
        textDecoration: this.props.todoitem.completed ? 'line-through' : 'none'
    }
}
    

    render() {
        const {id, title} = this.props.todoitem
        return (
            <div style={this.style()}>
                <p>
                    <input type="checkbox" onChange={this.props.isComplete.bind(this,id)}/>
                    {' '}
                    {title}
                    <button style = {delBtnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todoitem: PropTypes.object.isRequired
}

const delBtnStyle = {
    float: 'right',
    background: '#333',
    color: '#fff',
    padding: '2px 5px',
    borderRadius: '50%'
}

export default TodoItem
