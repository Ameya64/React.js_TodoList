import React,{Component} from 'react';
import Todos from './components/Todos';

import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Fill up gas',
        completed: false 
      },
      {
        id: 2,
        title: 'Buy groceries',
        completed: false 
      },
      {
        id: 3,
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

  render(){
  return (
    <div className="App">
      <Todos todo = {this.state.todos} isComplete = {this.isComplete}/>
     </div>
  )
  }
}

export default App;
