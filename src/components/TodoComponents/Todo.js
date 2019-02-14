import React from 'react';

const Todo = props => {
    return <p className = "listed-tasks"> {props.todo.task} </p>
      
}

export default Todo;