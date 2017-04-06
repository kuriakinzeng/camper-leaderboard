import React, { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }
  renderList() {
    let count = 0;
    return this.props.users.map(
      (user) => {
        count++;
        return (
          <tr>
            <td>{count}</td>
            <td>
              <a href={"https://www.freecodecamp.com/" + user.username} target="_blank">
                <img src={user.img} className="userimg"/>
                <span>{user.username}</span>
              </a>
            </td>
            <td>{user.recent}</td>
            <td>{user.alltime}</td>
          </tr>
        )
      }
    )
  }
  render() {
    return (<tbody>
      {this.renderList()}
    </tbody>)
  }
}

export default Users