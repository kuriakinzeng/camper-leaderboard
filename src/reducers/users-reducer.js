import { REQUEST_USERS, RECEIVE_USERS } from '../actions';

const UsersReducer = (state = {}, action) => {
  let newState = {}
  switch (action.type) {
    case REQUEST_USERS:
      newState = {}
      newState[action.sorting] = { 
        isFetching: true,
        users: []
      }
      return Object.assign({}, state, newState);
    case RECEIVE_USERS:
      newState = {}
      newState[action.sorting] = { 
        isFetching: false,
        users: action.users
      }
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

export default UsersReducer;