import React, { Component } from "react";
import {connect} from "react-redux"

import {ALL, ACTIVE, COMPLETED} from "../../constants/filterConstant"
import {updateFilter} from "../../actions/filterAction"
import {clearCompletedTodo} from "../../actions/todoActions"

import "./index.css"

class TodoFooter extends Component {
  state = {};

  countItemLeft = () => {
    const {todos} = this.props;
    return todos.filter((item) => !item.completed).length
  }
  render() {
    const {filter, updateFilter, clearCompletedTodo} = this.props;

    return (
      <div className="todo-footer-container">
        <div className="todo-count">{`${this.countItemLeft()} items left`}</div>
        <div className="todo-menus">
          <button className={filter === ALL ? "active" : ""} onClick={() => updateFilter(ALL)}>
            All
          </button>
          <button className={filter === ACTIVE ? "active" : ""} onClick={() => updateFilter(ACTIVE)}>Active</button>
          <button className={filter === COMPLETED ? "active" : ""} onClick={() => updateFilter(COMPLETED)}>Completed</button>
        </div>

        <button
          className='todo-clear-complete'
          onClick={() => clearCompletedTodo()}
        >
          Clear complete
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({todos, filter}) => {
  return {todos, filter}
}

const mapDispatchToProps = {
  updateFilter,
  clearCompletedTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter);
