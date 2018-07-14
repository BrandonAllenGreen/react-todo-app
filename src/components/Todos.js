import React, { Component } from 'react';

class Todos extends Component {
  // constructor(props) {
  //   super(props);

  //   this.createTodos = this.createTodos.bind(this);
  // }

  createTodos(todo) {
    return <li key={todo.key}>{todo.text}</li>;
  }
  klj;

  render() {
    const todos = this.props.entries;
    const listTodos = todos.map(this.createTodos);
    return <ul className="todo-list">{listTodos}</ul>;
  }
}

export default Todos;
