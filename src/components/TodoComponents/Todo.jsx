import React from 'react';

const Todo = props => {
  return (
    <div
      className={`todo${props.todo.completed ? 'complete' : null}`}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;
