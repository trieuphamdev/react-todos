import React, { Component } from "react";
import { connect } from "react-redux";

import TodoItem from "../TodoItem";

import "./index.css";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todo-list-container">
        {!!todos.length &&
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        {!todos.length && <div className="no-data">No todos</div>}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
