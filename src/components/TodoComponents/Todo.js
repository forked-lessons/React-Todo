/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function Todo(props) {
  return (
    <div className="todo">
      <h3>{props.todo.task}</h3>
    </div>
  );
}

export default Todo;
