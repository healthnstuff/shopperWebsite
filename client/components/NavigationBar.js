import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link
} from "react-router-dom";
import Routes from "../Routes";
import CartIcon from "./CartIcon";

import HomePage from "./HomePage";
import Cart from "./Cart";
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";
import { connect } from "react-redux";
import Users from "./Users";
import SingleUser from "./SingleUser";
import {Signup} from "./AuthForm"

const NavigationBar = ({ user }) => {
  return (
    <Router>
      <div id="navLinks">
      <NavLink to="/">
        <img src="healthnstuff_finalLogo.png" className="logo" />
      </NavLink>
      <Link to={`/orderInfo/cart/${user.id}`} className="cartIcon">
        {" "}
        <CartIcon />
      </Link>
        <NavLink to="/products">
          <button className="categoryButton" type="button">
            All Products
          </button>
        </NavLink>
        <button className="categoryButton" type="button">Essential Oils</button>
        <button className="categoryButton" type="button">Supplements</button>
        <button className="categoryButton" type="button">Vitamins</button>
        <button className="categoryButton" type="button">Tonic</button>
        <button className="categoryButton" type="button">Tea</button>
      </div>
      <div>
        <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact path={`/orderInfo/cart/${user.id}`} component={Cart} />
         <Route exact path="/products" component={AllProducts} />
         <Route exact path="/products/:productId" component={SingleProduct} />
        <Route exact path="/users" component={Users} />
         <Route exact path={`/users/${user.id}`} component={SingleUser} />
        </Switch>
      </div>
    </Router>
  );
};

const mapState = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapState)(NavigationBar);
