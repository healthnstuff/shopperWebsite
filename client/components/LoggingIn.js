import React from "react";
import { connect } from "react-redux";
import { Link, Route, NavLink, Switch, BrowserRouter as Router } from "react-router-dom";
import { logout } from "../store";
import { Login, Signup } from "./AuthForm";
import Routes from "../Routes";

import SingleUser from "./SingleUser";
import Cart from "./Cart";

const LoggingIn = ({ logout, isLoggedIn, name, id }) => {
  return (
  <Router>
    <div className="header">
    <nav id="loggingIn">
      {isLoggedIn ? (
        <div className="postLogIn">
          {/* The navbar will show these links after you log in */}
          <h1 style={{ color: "#A55093", fontSize: "40px", margin: "10px" }}>
            Welcome, {name}!{" "}
          </h1>
          <button className="navLink" onClick={logout}>
            Logout
          </button>
          {/* <Link to="/singleUser">Profile</Link> */}
          <NavLink exact to="/auth/me">
            <button className="navLink">Profile</button>
          </NavLink>
          <Switch>
            <Route exact path={`/orderInfo/cart/${id}`} component={Cart} />
            <Route exact path="/auth/me" component={SingleUser} />
          </Switch>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
            <Route path="/" component={Login} />
            <Route path="/" component={Signup} />
            <Route exact path={`/orderInfo/cart/${id}`} component={Cart} />
        </div>
      )}
    </nav>
  </div>
  </Router>
  
)};

/**
 * CONTAINER
 */
const mapState = (state) => {
  // console.log("map state is being called", JSON.stringify(state))
  return {
    isLoggedIn: !!state.auth.firstName,
    name: state.auth.firstName || "",
    id: state.auth.id || null,
  };
};

const mapDispatch = (dispatch) => {
  return {
    // handleClick() {
    //   dispatch(logout());
    // },
    logout: () => dispatch(logout())
  };
};

export default connect(mapState, mapDispatch)(LoggingIn);
