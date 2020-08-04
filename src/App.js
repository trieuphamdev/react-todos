import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore.js";

import "./App.css";

import TodoList from "./components/TodoList";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-container">
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
