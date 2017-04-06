import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectSorting, fetchUsers, fetchUsersIfNeeded } from '../actions'
import Picker from '../components/picker'

const mapStateToProps = (state) => {
  const { selectedSorting, selectedUsers } = state;
  return {
    selectedSorting
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      selectSorting: bindActionCreators(selectSorting, dispatch),
      fetchUsersIfNeeded: bindActionCreators(fetchUsersIfNeeded, dispatch)
    }
  }
}

const PickerContainer = connect(mapStateToProps, mapDispatchToProps)(Picker)

export default PickerContainer