/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        value={props.inputText}
        name="inputText"
        placeholder="Todo"
        onChange={props.handleChanges}
      />
      <button onClick={props.handleChanges}>Add Todo</button>
    </form>
  );
};

export default TodoForm;
