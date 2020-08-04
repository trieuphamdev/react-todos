import React, { Component } from "react";
import { connect } from "react-redux";

import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";
import TodoFooter from "../TodoFooter";

import "./index.css";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todo-container">
        <TodoForm />
        <div className="todo-list-container">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
        <TodoFooter />
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
