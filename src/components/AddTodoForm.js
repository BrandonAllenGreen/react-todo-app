import React, { Component } from 'react';

class AddTodoForm extends Component {
  nameRef = React.createRef();
  descriptionRef = React.createRef();

  // create new todo from form
  createTodo = e => {
    e.preventDefault();
    const todo = {
      name: this.nameRef.value.value,
      description: this.descriptionRef.value.value
    };
    console.log(todo);

    this.props.addTodo(todo);
    e.currentTarget.reset();
  };

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
