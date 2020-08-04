import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../constants/todoConstant";

const todosReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case UPDATE_TODO:
      return state.map((todo) => (todo.id === payload.id ? payload : todo));
    case REMOVE_TODO:
      return state.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
};

export default todosReducer;
