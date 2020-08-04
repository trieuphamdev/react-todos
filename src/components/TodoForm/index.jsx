import React, { Component } from "react";
import { connect } from "react-redux";

import "./index.css";

import { addTodo } from "../../actions/todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.newTodo()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  newTodo() {
    return {
      id: new Date().getTime(),
      checked: false,
      content: "",
    }
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state);
    this.setState(this.newTodo())
  }

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
