import React, { Component } from "react";

import GreenTickIcon from "../../assets/images/green-tick.svg";
import BlackTickIcon from "../../assets/images/black-tick.svg"
import EditIcon from "../../assets/images/edit.svg";
import DeleteIcon from "../../assets/images/delete.svg";

import "./index.css";

class TodoItem extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="todo-item-container">
          <a href="#" className="todo-item-toggle">
            <img src={GreenTickIcon} alt="tick" />
          </a>
          <div className="todo-item-content completed">Learn ruby on rails</div>
          <div className="todo-item-options">
            <a href="#" className="icon-btn">
              <img src={EditIcon} alt="edit" />
            </a>
            <a href="#" className="icon-btn">
              <img src={DeleteIcon} alt="close" />
            </a>
          </div>
        </div>
        <div className="todo-item-container">
          <a href="#" className="todo-item-toggle">
            <img src={BlackTickIcon} alt="tick" />
          </a>
          <div className="todo-item-content">Learn React</div>
          <div className="todo-item-options">
            <a href="#" className="icon-btn">
              <img src={EditIcon} alt="edit" />
            </a>
            <a href="#" className="icon-btn">
              <img src={DeleteIcon} alt="close" />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default TodoItem;
