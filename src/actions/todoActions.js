import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../constants/todoConstant";

const addTodoDispatcher = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

const updateTodoDispatcher = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const addTodo = (todo) => (dispatch) => {
  dispatch(addTodoDispatcher(todo));
};

export const updateTodo = (todo) => (dispatch) => {
  dispatch(updateTodoDispatcher(todo));
};
