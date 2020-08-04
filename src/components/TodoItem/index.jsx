import React, { Component } from "react";
import { connect } from "react-redux";

import { updateTodo, removeTodo } from "../../actions/todoActions";

import GreenTickIcon from "../../assets/images/green-tick.svg";
import BlackTickIcon from "../../assets/images/black-tick.svg";
import EditIcon from "../../assets/images/edit.svg";
import DeleteIcon from "../../assets/images/delete.svg";
import CheckIcon from "../../assets/images/check.svg";

import "./index.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedContent: this.props.todo.content,
      editing: false,
    };
  }

  handleOnComplete = () => {
    const { updateTodo, todo } = this.props;

    updateTodo({ ...todo, completed: !todo.completed });
  };

  toggleEdit = () => {
    this.setState({
      editing: true,
    });
  };

  handleOnEditing = (e) => {
    this.setState({
      editedContent: e.target.value,
    });
  };

  handleOnSave = (e) => {
    e.preventDefault();
    const { todo, updateTodo } = this.props;
    const editedTodo = { ...todo, content: this.state.editedContent };
    updateTodo(editedTodo);
    this.setState({
      editing: false,
    });
  };

  handleOnCancel = () => {
    this.setState({
      editedContent: this.props.todo.content,
      editing: false,
    });
  };

  handleRemoveTodo = () => {
    const { todo, removeTodo } = this.props;

    removeTodo(todo);
  };

  render() {
    const {
      todo: { completed, content },
    } = this.props;
    const { editing } = this.state;
    return (
      <div className="todo-item-container">
        <button
          className="todo-item-toggle"
          onClick={() => this.handleOnComplete()}
        >
          <img src={completed ? GreenTickIcon : BlackTickIcon} alt="tick" />
        </button>
        {editing && (
          <form className="todo-item-form" onSubmit={this.handleOnSave}>
            <div className="todo-item-content">
              <input
                value={this.state.editedContent}
                onChange={this.handleOnEditing}
              />
            </div>
            <div className="todo-item-options">
              <button className="icon-btn" type="submit">
                <img src={CheckIcon} alt="complete-edit" />
              </button>
              <button className="icon-btn" onClick={this.handleOnCancel}>
                <img src={DeleteIcon} alt="close-edit" />
              </button>
            </div>
          </form>
        )}

        {!editing && (
          <>
            <div
              className={`todo-item-content ${completed ? "completed" : ""}`}
            >
              {content}
            </div>
            <div className="todo-item-options">
              <button
                className="icon-btn"
                onClick={() => this.setState({ editing: true })}
              >
                <img src={EditIcon} alt="edit" />
              </button>
              <button className="icon-btn" onClick={this.handleRemoveTodo}>
                <img src={DeleteIcon} alt="close" />
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateTodo,
  removeTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
