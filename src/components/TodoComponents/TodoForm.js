import React from 'react';

const TodoForm = props => {
    return (
    <form className = "form-style">
        <input 
        value = {props.newText} 
          type = "text"
            onChange = {props.handleChanges}
              name = "newText"
                />
    </form>
            
        )
}

export default TodoForm;