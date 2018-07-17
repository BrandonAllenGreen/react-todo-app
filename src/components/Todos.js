import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.createTodos = this.createTodos.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  createTodos(todo) {
    return (
      <li
        className="todo"
        key={todo.key}
        onClick={() => this.deleteTodo(todo.key)}
      >
        {todo.text}
      </li>
    );
  }

  deleteTodo(key) {
    this.props.deleteTodo(key);
  }

  render() {
    const todos = this.props.entries;
    const listTodos = todos.map(this.createTodos);
    return (
      <ul className="todo-list">
        <FlipMove
          duration={150}
          enterAnimation="accordionVertical"
          leaveAnimation="elevator"
        >
          {listTodos}
        </FlipMove>
      </ul>
    );
  }
}

export default Todos;
