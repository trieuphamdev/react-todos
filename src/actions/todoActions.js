import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../constants/todoConstant";

export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: todo,
  });
};

export const updateTodo = (todo) => (dispatch) => {
  dispatch({
    type: UPDATE_TODO,
    payload: todo,
  });
};

export const removeTodo = (todo) => (dispatch) => {
  dispatch({
    type: REMOVE_TODO,
    payload: todo,
  });
};
