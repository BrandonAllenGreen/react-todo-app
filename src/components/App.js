import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import Todo from './Todo';

class App extends Component {
  state = {
    todos: {}
  };

  addTodo = todo => {
    const todos = { ...this.state.todos };
    todos[`todo${Date.now()}`] = todo;
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="">
        <AddTodoForm addTodo={this.addTodo} />

        <div className="">
          <ul className="todos">
            {Object.keys(this.state.todos).map(key => (
              <Todo key={key} index={key} details={this.state.todos[key]} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
