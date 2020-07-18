import React, { Component } from "react";

import GreenTickIcon from "../../assets/images/green-tick.svg";
import BlackTickIcon from "../../assets/images/black-tick.svg";
import EditIcon from "../../assets/images/edit.svg";
import DeleteIcon from "../../assets/images/delete.svg";

import "./index.css";

class TodoItem extends Component {
  handleOnComplete = () => {
    this.props.handleOnComplete();
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

export default TodoItem;
