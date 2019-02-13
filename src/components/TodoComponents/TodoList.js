/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  },
];

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo,
      task: '',
      id: '',
      completed: '',
    };
  }

  addTodo = e => {
    e.preventDefault();
    console.log(e.target);
    const newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed,
    };
  };

  render() {
    return (
      <div>
        <h1>ToDo List!</h1>
        <div>
          {this.state.todo.map((todoFromMap, index) => (
            <Todo key={index} todo={todoFromMap} />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
