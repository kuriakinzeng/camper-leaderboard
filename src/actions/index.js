import fetch from 'isomorphic-fetch'

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SELECT_SORTING = 'SELECT_SORTING';

export const selectSorting = (sorting) => {
  return {
    type: SELECT_SORTING,
    sorting
  }
};

export const requestUsers = sorting => {
  return {
    type: REQUEST_USERS,
    sorting
  }
}

export const receiveUsers = (sorting, json) => {
  return {
    type: RECEIVE_USERS,
    sorting,
    users: json
  }
}

export const fetchUsers = sorting => {
  return (dispatch) => {
    dispatch(requestUsers(sorting))
    return fetch(`https://fcctop100.herokuapp.com/api/fccusers/top/${sorting}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(sorting, json)))
  }
}

export const fetchUsersIfNeeded = sorting => (dispatch, getState) => {
  const state = getState()
  // call only if it's empty
  if(!state.selectedUsers[sorting])
    return dispatch(fetchUsers(sorting))
}