import React from 'react'
import {connect} from 'react-redux'
import {Link, Route, NavLink} from 'react-router-dom'
import {logout} from '../store'
import { Login } from './AuthForm';
import Routes from "../Routes"

const LoggingIn = ({handleClick, isLoggedIn, name, id}) => (
  <div id="LoggingIn">
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <h1>Welcome, {name}! </h1>
          <button className="navLink" onClick={handleClick}>Logout</button>
          {/* <Link to="/singleUser">Profile</Link> */}
          <NavLink className="navLink" exact to={`/users/${id}`}>
            <button>Profile</button>
          </NavLink>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Routes />
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
    // console.log("map state is being called", JSON.stringify(state))
  return {
    isLoggedIn: !!state.auth.firstName,
    name: state.auth.firstName || '',
    id: state.auth.id || null
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(LoggingIn)
