import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../constants/todoConstant";

const initTodos = [
  {
    id: 1,
    content: "First Todo",
    checked: true,
  },
  {
    id: 2,
    content: "Second Todo",
    checked: false,
  },
];

const todosReducer = (state = initTodos, { type, payload }) => {
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
