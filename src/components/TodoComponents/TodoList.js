// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className = "whole-list">
            {props.todos.map((todo)=> {
                return (
                    <Todo 
                    todo = {todo}
                    toggleComplete = {props.toggleComplete}
                    />
                );
            })}
        </div>
    )
};


export default TodoList;