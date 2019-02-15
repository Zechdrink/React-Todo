import React from 'react';

const TodoForm = props => {
    return (
    <form className = "form-style">
        <input 
        value = {props.newText} 
          type = "text"
            onChange = {props.handleChanges}
              name = "newText"
                placeholder = "Add new task here!"
                />

                <button onClick = {props.addTodo} className = "form-btn">Submit</button>
                <button onClick = {props.clearCompleted} className = "form-btn">De-submit</button>
    </form>
            
        )
}

export default TodoForm;