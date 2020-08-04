import React, { Component } from "react";
import { connect } from "react-redux";

import "./index.css";

import { addTodo } from "../../actions/todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.newTodo();
  }

  newTodo = () => ({
    id: new Date().getTime(),
    completed: false,
    content: "",
  });

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state);
    this.setState(this.newTodo());
  };

  render() {
    return (
      <div className="todo-form-container">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.content}
            onChange={this.handleChange}
            type="text"
            placeholder="What need to be done?"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
