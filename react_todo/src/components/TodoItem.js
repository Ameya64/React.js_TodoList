import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    render() {
        return (
            <div style={item}>
                <p>{this.props.todoitem.title}</p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todoitem: PropTypes.object.isRequired
}

const item = {
    backgroundColor: 'Green'
}
export default TodoItem
