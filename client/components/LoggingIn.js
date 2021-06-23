import React from "react";
import { connect } from "react-redux";
import { Link, Route, NavLink } from "react-router-dom";
import { logout } from "../store";
import { Login } from "./AuthForm";
import Routes from "../Routes";
import CartIcon from "./CartIcon";

const LoggingIn = ({ handleClick, isLoggedIn, name, id }) => (
  <div className="header">
    <nav id="loggingIn">
      <NavLink to="/">
        <img src="healthnstuff_finalLogo.png" className="logo" />
      </NavLink>
      {isLoggedIn ? (
        <div className="postLogIn">
          {/* The navbar will show these links after you log in */}
          <h1 style={{ color: "#A55093", fontSize: "40px", margin: "10px" }}>
            Welcome, {name}!{" "}
          </h1>
          <button className="navLink" onClick={handleClick}>
            Logout
          </button>
          {/* <Link to="/singleUser">Profile</Link> */}
          <NavLink exact to={`/users/${id}`}>
            <button className="navLink">Profile</button>
          </NavLink>
          <Link to={`/orderInfo/cart/${id}`}>
            <CartIcon />
          </Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Routes />
        </div>
      )}
    </nav>
  </div>
);

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
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(LoggingIn);
