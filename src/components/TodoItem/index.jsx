import React, { Component } from "react";
import { connect } from "react-redux";

import { updateTodo } from "../../actions/todoActions"

import GreenTickIcon from "../../assets/images/green-tick.svg";
import BlackTickIcon from "../../assets/images/black-tick.svg";
import EditIcon from "../../assets/images/edit.svg";
import DeleteIcon from "../../assets/images/delete.svg";

import "./index.css";

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.props.todo,
      editing: false,
    }
  }
  handleOnComplete = () => {
    const { updateTodo, todo } = this.props

    updateTodo({...todo, completed: !todo.completed})
  };

  render() {
    const {
      todo: { completed, content },
    } = this.props;
    return (
      <div className="todo-item-container">
        <button
          className="todo-item-toggle"
          onClick={() => this.handleOnComplete()}
        >
          <img src={completed ? GreenTickIcon : BlackTickIcon} alt="tick" />
        </button>
        <div className={`todo-item-content ${completed ? "completed" : ""}`}>
          {content}
        </div>
        <div className="todo-item-options">
          <button className="icon-btn">
            <img src={EditIcon} alt="edit" />
          </button>
          <button className="icon-btn">
            <img src={DeleteIcon} alt="close" />
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateTodo,
}

export default connect(()=>({}), mapDispatchToProps)(TodoItem);
