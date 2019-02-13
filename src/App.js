import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class Task {
  constructor(taskName) {
    (this.task = taskName), (this.id = Date.now()), (this.completed = false);
  }
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          task: 'Task 1',
          id: '1234',
          completed: false,
        },
      ],
      inputText: '',
    };
  }

  addTodo = e => {
    e.preventDefault();
    // console.log(e.target);
    const newTodo = {
      task: this.state.task,
      // id: this.state.id,
      // completed: this.state.completed,
    };
    this.setState({
      todo: [...this.state.todo, newTodo],
      task: '',
    });
  };
  handleChanges = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>ToDo List!</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
