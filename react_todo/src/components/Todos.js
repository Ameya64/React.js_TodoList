import React,{Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends Component {
  render(){

  return this.props.todo.map((i) => (
    <TodoItem key={i.id} todoitem = {i} isComplete = {this.props.isComplete} delTodo = {this.props.delTodo} />
  ))
  }
}

//PropTypes
Todos.propTypes = {
  todo: PropTypes.array.isRequired,
  isComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos
