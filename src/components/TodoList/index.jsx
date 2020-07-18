import React, { Component } from "react";

import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";
import TodoFooter from "../TodoFooter";

import "./index.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: "Lean Ruby on Rails", completed: true },
        { id: 2, content: "Learn React", completed: false },
      ],
    };
  }

  handleOnComplete = (id) => {
    const { todos } = this.state;
    const new_todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({todos: new_todos})
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <TodoForm />
        <div className="todo-list-container">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleOnComplete={() => this.handleOnComplete(todo.id)}
            />
          ))}
        </div>
        <TodoFooter />
      </div>
    );
  }
}

export default TodoList;
