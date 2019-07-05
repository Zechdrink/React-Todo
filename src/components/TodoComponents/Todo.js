import React from 'react';

const Todo = props => {
    return <p 
    onClick = {()=>props.toggleComplete(props.todo.id)} 
    className = "listed-tasks"
    className = {`task${props.todo.complete ? ' completed' : ""}`}
    > 
    {props.todo.task} </p>
      
}

export default Todo;