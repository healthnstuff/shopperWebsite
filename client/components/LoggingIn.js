import React from "react";
import { connect } from "react-redux";
import {
  Link,
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { logout } from "../store";
import { Login, Signup } from "./AuthForm";
import Routes from "../Routes";

import SingleUser from "./SingleUser";
import Cart from "./Cart";

const LoggingIn = ({ handleClick, isLoggedIn, name, id }) => (
  <Router>
    <div className="header">
      <nav id="loggingIn">
        <NavLink to="/">
          <img src="../logo.png" className="logo" />
        </NavLink>
        {isLoggedIn ? (
          <div className="postLogIn">
            {/* The navbar will show these links after you log in */}
            <h1 style={{ color: "#A55093", fontSize: "40px", margin: "10px" }}>
              Welcome, {name || "friend"}!{" "}
            </h1>
            <button className="navLink" onClick={handleClick}>
              Logout
            </button>
            <NavLink exact to={`/users/${id}`}>
              <button className="navLink">Profile</button>
            </NavLink>
            <Switch>
              <Route exact path={`/orderInfo/cart/${id}`} component={Cart} />
              <Route exact path={`/users/${id}`} component={SingleUser} />
            </Switch>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <NavLink exact to="/login">
              <button>Login</button>
            </NavLink>
            <span>or</span>
            <NavLink exact to="/signup">
              <button>Signup</button>
            </NavLink>
            <Switch>
              <Route path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
            {/* <Route exact path={`/orderInfo/cart/${id}`} component={Cart} /> */}
          </div>
        )}
      </nav>
    </div>
  </Router>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  // console.log("map state is being called", JSON.stringify(state))
  return {
    isLoggedIn: !!state.auth.id,
    name: state.auth.firstName || "",
    id: state.auth.id || null,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(LoggingIn);
