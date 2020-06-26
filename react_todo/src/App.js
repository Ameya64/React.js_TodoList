import React,{Component} from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid/dist/v4';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Fill up gas',
        completed: false 
      },
      {
        id: uuid(),
        title: 'Buy groceries',
        completed: false 
      },
      {
        id: uuid(),
        title: 'Go surfing',
        completed: false 
      }
    ]
  }

  //Completed Todo Toggle
  isComplete = (id)  => {
    this.setState({todos: this.state.todos.map(i => {
      if(i.id === id) {
        i.completed = !i.completed
      }
      return i
    })});
  }

  //Delete Todo
  deleteTodo = (id) => {
      this.setState({todos: [...this.state.todos.filter(i => i.id !== id)]})
  }

  //Add Todo
  addTodo = (title) => {
      const newTodo = {
        id:uuid(),
        title:title,
        completed:false
      }
      this.setState({todos: [...this.state.todos, newTodo]})
  }

  render(){
  return (
      <div className = "App">
        <div className = "container">
        <Header />
        <AddTodo addTodo = {this.addTodo} />
        <Todos todo = {this.state.todos} isComplete = {this.isComplete} delTodo = {this.deleteTodo} />
        </div>
      </div>
  )
  }
}

export default App;
