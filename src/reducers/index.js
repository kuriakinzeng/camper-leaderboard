import { combineReducers } from 'redux';
import selectedUsers from './users-reducer';
import selectedSorting from './picker-reducer';

const reducer = combineReducers({
  selectedSorting, // 
  selectedUsers
})
/* 
state is therefore:
{
  selectedSorting: 'alltime', // picker-reducer dictates this structure
  selectedUsers: { // users-reducer dictates this structure
    recent: {
      isFetching: true
      users: []
    }
    alltime: {
      ...
    }
  }
}
*/


export default reducer