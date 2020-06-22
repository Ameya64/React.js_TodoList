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
        completed: true 
      },
      {
        id: 3,
        title: 'Go surfing',
        completed: false 
      }
    ]
  }

  isComplete = (id)  => {
    console.log(id)
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
