import {UPDATE_FILTER} from "../constants/filterConstant";

export const updateFilter = (filter) => (dispatch) => {
  dispatch({
    type: UPDATE_FILTER,
    payload: filter
  })
}
