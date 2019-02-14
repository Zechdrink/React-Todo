import React from 'react';
import './App.css';

import TodoList from './components/TodoComponents/TodoList';



const todos = [{
  task: 'eat',
  id: 33,
  complete: false
},
{
  task: 'watch anime',
  id: 34,
  complete: false
}];

class App extends React.Component {
  //constructor
  constructor(){
    super();
    this.state = {
      todos: todos,
    } 

  }
  //render is a lifecycle method => returns our jsx
  render() {
    return (
      <div className = "App">
          <h1>Stuff To Do</h1>
          <TodoList todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state