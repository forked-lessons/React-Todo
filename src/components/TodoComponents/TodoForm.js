/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.addTodo}>
      <input
        type="text"
        value={props.task}
        name="task"
        placeholder="task"
        onChange={props.handleChanges}
      />
      <input
        type="text"
        value={props.id}
        name="id"
        placeholder="id"
        onChange={props.handleChanges}
      />
      <input
        type="text"
        value={props.completed}
        name="completed"
        placeholder="completed"
        onChange={props.handleChanges}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
