import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});
