import React from 'react';

import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const toDoArr  = [
{

}
];

class App extends React.Component {
  //constructor
  constructor(){
    super();
    this.state = {
      stuff: toDoArr,
      inputText: '',
      id: '',
      completed: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addListItem = event => {
    event.preventDefault();
    this.setState({
      stuff: [...this.state.stuff, {task: this.state.inputText}]
    })  
  }

  
  //render is a lifecycle method => returns our jsx
  render() {
    return (
      <div className = "App">
        <TodoList wholeList = {this.state.stuff} />
        <TodoForm 
          addListItem = {this.addListItem}
          inputText = {this.state.inputText} 
          handleChange = {this.handleChange}
          />
      </div>
    );
  }
}

export default App;

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state