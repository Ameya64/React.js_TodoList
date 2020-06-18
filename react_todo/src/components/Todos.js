import React,{Component} from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render(){

  return this.props.todo.map((i) => (
    <TodoItem key={i.id} todoitem = {i}/>
  ));
  }
}

export default Todos;
