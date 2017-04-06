import { connect } from 'react-redux';
import Users from '../components/users';

// state here is always the same object (same structure)
// reducers dictates the structure of the state
const mapStateToProps = (state) => {
  const { selectedSorting, selectedUsers } = state; 
  const { isFetching, users } = selectedUsers[selectedSorting] || 
  { isFetching: false, users: [] }
  return {
    users,
    isFetching
  }
};
const UsersContainer = connect(mapStateToProps, null)(Users)

export default UsersContainer

