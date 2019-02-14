import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        className="form-input"
        onChange={props.todoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button className="form-btn add-btn" onClick={props.addTodo}>
        Add Todo
      </button>
      <button className="form-btn clear-btn" onClick={props.handleClearTodos}>
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
