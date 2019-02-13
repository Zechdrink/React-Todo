import React from 'react';

const TodoForm = props => {
return (
    <div>
        <form >
        <input 
         type ="text"
         name = "inputText"
         placeholder = "Add new To-Do item"
         value = {props.inputText}
         onChange = {props.handleChange}
         />
        </form>
        <button onClick = {props.addListItem}>Add</button>
        <button>Delete</button>
    </div>
)
}


export default TodoForm;