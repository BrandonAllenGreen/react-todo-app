import React, { Component } from 'react';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.createTodo = this.createTodo.bind(this);
  }

  // create new todo from form
  createTodo(e) {
    e.preventDefault();
    const todo = {
      name: this.nameRef.current.value,
      description: this.descriptionRef.current.value
    };
    this.props.addTodo(todo);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="add-todo-form" onSubmit={this.createTodo}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <textarea
          name="description"
          ref={this.descriptionRef}
          placeholder="description"
        />
        <button type="submit">Add New Todo</button>
      </form>
    );
  }
}

export default AddTodoForm;
