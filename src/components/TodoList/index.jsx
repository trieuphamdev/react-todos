import React, { Component } from "react";
import { connect } from "react-redux";

import {ACTIVE, ALL, COMPLETED} from "../../constants/filterConstant"

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

const filterTodo = (todos, filter) => {
  switch (filter) {
    case ACTIVE:
      return todos.filter((item) => !item.completed);
    case ALL:
      return todos;
    case COMPLETED:
      return todos.filter((item) => item.completed);
    default:
      return todos;
  }
}

const mapStateToProps = ({ todos, filter }) => {

  return { todos: filterTodo(todos, filter) };
};

export default connect(mapStateToProps)(TodoList);
