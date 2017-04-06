import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import PickerContainer from './containers/picker-container.js'
import UsersContainer from './containers/users-container.js'
import reducer from './reducers'

let middleware = [ thunk ]
// if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
// }

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <div className="col-lg-12">
      <h1>Free Code Camp Leaderboard</h1> 
      <p>As of {new Date().toDateString()}</p>
      <table className="table table-striped table-bordered">
        <PickerContainer />
        <UsersContainer />
      </table>
    </div>
  </Provider>,
  document.getElementById('app')
);



// /* 
// Useful resource:
// https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a

// STEP 1 — Write A Detailed Mock of the Screen

// STEP 2 — Divide The App Into Components
// Picker, Users

// STEP 3 — List State and Actions For Each Component
// Every component does two things:
// A. Render DOM based on some data. This data is called as a "state".
// B. Listen to the user and other events and send them to JS functions. These are called “Actions”.
// 3.1 Picker
// - State: UI changes based on which is picked
// - Action: It listens to user's input, and should call SELECT_SORTBY, and REQUEST_USERS

// 3.2 Users
// - State: It needs data from the store to render itself, so it needs state. Let's call it users.
// - Action: N/A


// STEP 4 - Create Action Creators For Each Action
// const BASE_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/';
// const selectSortBy = (sortBy) => ({
//   type: SELECT_SORTBY,
//   sortBy
// })
// const requestUsers = (sortBy) => ({
//   type: REQUEST_USERS,
//   sortBy
// });
// const receiveUsers = (sortBy, json) => ({
//   type: RECEIVE_USERS,
//   sortBy,
//   users: json.data
// })
// const fetchUsers = (sortBy) => (dispatch) => {
//   dispatch(requestUsers(sortBy)
//   return fetch(`${BASE_URL}/${sortBy}`)
//   .then(response => response.json())
//   .then(json => dispatch(receiveUsers(sortBy, json)))
// }


// STEP 5 - Write Reducers For Each Action
// // specify how the application's state changes in response
// // reducer must be clean, no side-effect, no API calls
// const selectedReducer = (state = 'alltime', action) => {
//   switch(action.type){
//     case SELECT_SORTBY: 
//       return action.sortBy
//     default
//       return state
//   }
// }

// const usersReducer = (state = { users: [] }, action) => {
//   switch(action.type){
//     case REQUEST_USERS: 
//       return {...state} // no changes yet
//     case RECEIVE_USERS: 
//       return {
//         ...state, 
//         users: action.users
//       }
//     default
//       return state
//   }
// }



// STEP 6 - Implement Every Presentational Component
// 6.1 Picker: Since it has an action, it should receive a callback function (onClick) from parent Container component (via mapDispatchToProps). It also has a state, it should receive a state from parent Container as well (or it can be a local state?)
// 6.2 Users: Since it has a state, it should receive a state from parent Container component (via mapStateToProps)

// STEP 7 — Create Container Component For Some/All Presentational Component
// 7.1 Picker Container Component, to implement an "onClick" callback function via mapDispatchToProps
// 7.2 Users Container Component, to pass state to Presentational Component via mapStateToProps

// STEP 8 - Bring Them All Together
// - Create a store by passing it reducers
// - Wrap main Components in Provider which also passes store
// */



// // Presentational Component
// class Picker extends Component {
//   constructor(props) {
//     super(props)
//     this.sort = this.sort.bind(this);
//   }
//   sort(sortby) {
//     console.log(this.props);
//     this.props.selectSorting(sortby);
//   }
//   render() {
//     return (<thead>
//         <tr>
//           <th>#</th>
//           <th>Camper Name</th> 
//           <th onClick={this.sort('recent')}>Points in past 30 days</th>
//           <th onClick={this.sort('alltime')}>All time points </th>
//         </tr>
//       </thead>);
//   }
// }

// class Users extends Component {
//   constructor(props) {
//     super(props);
//     this.renderList = this.renderList.bind(this);
//   }
//   renderList() {
//     let count = 0;
//     this.props.users.map(
//       (user) => {
//         count++;
//         return (
//           <tr>
//         <td>{count}</td>
//         <td>
//           <a href={"https://www.freecodecamp.com/"+this.props.user.username} target="_blank">
//             <img src={this.props.user.img}/>
//             <span>{this.props.user.username}</span>
//           </a>
//         </td>
//         <td>{this.props.user.recent}</td>
//         <td>{this.props.user.alltime}</td>
//       </tr>
//         )
//       }
//     )
//   }
//   render() {
//     return (<tbody>{this.renderList()}</tbody>)
//   }
// }

// // Container Components
// const mapPickerDispatchToProps = (dispatch) => {
//   return {
//     selectSorting: (text) => {
//       dispatch(selectSorting(text));
//     }
//   }
// }

// const mapPickerStateToProps = (state) => ({
//   sorting: state
// });
// // const mapPickerDispatchToProps = (dispatch) => Redux.bindActionCreators(
// //   [{}, selectSorting, requestUsers, receiveUsers].reduce(Object.assign),
// //   dispatch)

// const PickerContainer = connect(mapPickerStateToProps, mapPickerDispatchToProps)(Picker);

// const mapUsersStateToProps = (state) => {
//   const {
//     selected,
//     users
//   } = state;
//   return {
//     users: users[selected]
//   }
// };
// const UsersContainer = connect(mapUsersStateToProps, null)(Users);

// const rootReducer = Redux.combineReducers({
//   usersReducer,
//   selectSortingReducer
// });
// const store = Redux.createStore(rootReducer);

// // const App = () => (
// //   <div>
// //     <Input />
// //     <Output />
// //   </div>
// // )

// ReactDOM.render(
//   <Provider store={store}>
//     <table>
//       <PickerContainer />
//       <UsersContainer />
//     </table>
//   </Provider>,
//   document.getElementById('app')
// );