import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { name, description } = this.props.details;
    return (
      <li className="todo-item">
        <h4 className="todo-name">{name}</h4>
        <p>{description}</p>
      </li>
    );
  }
}

export default Todo;
