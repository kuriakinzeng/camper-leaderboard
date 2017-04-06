import { SELECT_SORTING } from '../actions';

const PickerReducer = (state = 'alltime', action) => {
  switch (action.type) {
    case SELECT_SORTING:
      return action.sorting;
    default:
      return state;
  }
}

export default PickerReducer;