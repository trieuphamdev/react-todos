import { UPDATE_FILTER, ALL } from "../constants/filterConstant";

const filterReducer = (state = ALL, { type, payload }) => {
  switch (type) {
    case UPDATE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default filterReducer;
