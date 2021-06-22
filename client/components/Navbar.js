import React from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {logout} from '../store'
import { Login } from './AuthForm';
import Routes from "../Routes"

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="navBar">
    <h1>Health N Stuff {JSON.stringify(isLoggedIn)} val</h1>
    <nav>
        <a href="/">
            <img src="healthnstuff_finalLogo.png" alt="Logo" width="200px" heigh="100px" />
        </a> 
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
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
    console.log("map state is being called", JSON.stringify(state))
  return {
    isLoggedIn: !!state.auth.firstName
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
