import React, { Component } from "react";

import "./index.css";

class TodoForm extends Component {
  render() {
    return (
      <div className="todo-form-container">
        <form>
          <input type="text" placeholder="What need to be done?" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
