import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore.js";

import { getLocalTodos, setLocalTodos } from "./services/todoServices";

import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFooter from "./components/TodoFooter";

const store = configureStore(getLocalTodos());

store.subscribe(() => {
  setLocalTodos({ todos: store.getState().todos });
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-container">
          <div className="todo-container">
            <TodoForm />
            <TodoList />
            <TodoFooter />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
