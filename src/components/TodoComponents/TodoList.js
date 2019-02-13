/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todoList.map(todoList => (
        <Todo key={todoList.id} todo={todoList} />
      ))}
      ;
    </div>
  );
};

export default TodoList;
