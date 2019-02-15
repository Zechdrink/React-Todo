import React from 'react';
import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



const todos = [{
  task: 'Eat',
  id: 33,
  complete: false
},
{
  task: 'Watch Anime',
  id: 34,
  complete: false
}];

class App extends React.Component {
  //constructor
  constructor(){
    super();
    this.state = {
      todos: todos,
      newText: '',
    } 
  };

  handleChanges = event => {;
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos, 
        {
          task: this.state.newText,
          id: Date.now(),
          completed: false
        }
      ],
        newText: ''
    });
  };

  toggleComplete = (iD) => {
    //set state
    //look through todoList and find task clicked on
    //toggle the completed status for that task
    this.setState({
      todos: this.state.todos.map((todo)=>{
        if(todo.id !== iD){  
          return todo;
        } else {
          return {
         ...todo,
          complete: !todo.complete
          }
        }
      })
    })
  };

  //render is a lifecycle method => returns our jsx
  render() {
    return (
      <div className = "App">
          <h1>Stuff To Do</h1>

          <TodoList 
          todos = {this.state.todos}
          toggleComplete = {this.toggleComplete}
          />

          <TodoForm 
            newText = {this.state.newText}
              handleChanges = {this.handleChanges}
                addTodo = {this.addTodo}
                />
      </div>
    );
  }
}

export default App;

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state