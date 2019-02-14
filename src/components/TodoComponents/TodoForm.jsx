import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="todo"
      />
      <button onClick={props.addTodo}>Add to List</button>
    </form>
  );
};
export default TodoForm;
