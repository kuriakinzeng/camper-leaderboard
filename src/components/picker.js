import React, { Component } from 'react';

class Picker extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // const { actions, selectedSorting } = this.props;
    // const { fetchUsersIfNeeded, selectSorting } = actions;
    // fetchUsersIfNeeded(selectedSorting);
    this.props.actions.fetchUsersIfNeeded(this.props.selectedSorting);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSorting !== this.props.selectedSorting)
      this.props.actions.fetchUsersIfNeeded(nextProps.selectedSorting)
  }
  sort(sortby) {
    this.props.actions.selectSorting(sortby);
  }
  render() {
    return (<thead>
        <tr>
          <th>#</th>
          <th>Camper Name</th> 
          <th className="sortable" onClick={this.sort.bind(this,'alltime')}>All Time Points </th>
          <th className="sortable" onClick={this.sort.bind(this,'recent')}>Points in Past 30 Days</th>
        </tr>
      </thead>);
  }
}

export default Picker