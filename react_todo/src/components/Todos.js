import React,{Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends Component {
  render(){

  return this.props.todo.map((i) => (
    <TodoItem key={i.id} todoitem = {i} isComplete = {this.props.isComplete}/>
  ))
  }
}

//PropTypes
Todos.propTypes = {
  todo: PropTypes.array.isRequired
}

export default Todos;
