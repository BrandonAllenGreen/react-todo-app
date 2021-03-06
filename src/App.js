import React, { Component } from 'react';
import Todos from './components/Todos';
import './css/TodoList.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
    this.newTodoRef = React.createRef();
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    const newTask = {
      text: this.newTodoRef.current.value,
      key: Date.now()
    };
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat(newTask)
      };
    });
    this.newTodoRef.current.value = '';
  }

  deleteTodo(key) {
    const filteredTodos = this.state.todos.filter(todo => {
      return todo.key !== key;
    });
    this.setState({
      todos: filteredTodos
    });
  }

  render() {
    return (
      <div className="todo-list-main">
        <div className="header">
          <form onSubmit={this.addTodo}>
            <input
              className="todo-input"
              ref={this.newTodoRef}
              placeholder="add a todo"
            />
            <button className="submit-button" type="submit">
              add
            </button>
          </form>
        </div>
        <Todos entries={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
