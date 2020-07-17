import React from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoFooter from "./components/TodoFooter"

function App() {
  return (
    <div className="app-container">
      <div className="todo-container">
        <TodoForm />
        <div className="todo-list-container">
          <TodoItem />
        </div>
        <TodoFooter />
      </div>
    </div>
  );
}

export default App;
