import React, { Component } from 'react';

class Todos extends Component {
  createTodos(todo) {
    return (
      <li className="todo" key={todo.key}>
        {todo.text}
      </li>
    );
  }

  render() {
    const todos = this.props.entries;
    const listTodos = todos.map(this.createTodos);
    return <ul className="todo-list">{listTodos}</ul>;
  }
}

export default Todos;
