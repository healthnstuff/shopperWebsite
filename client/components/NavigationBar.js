import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Routes from "../Routes";

import HomePage from "./HomePage";
import Cart from "./Cart";
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";
import { connect } from "react-redux";
import Users from "./Users";
import SingleUser from "./SingleUser";

const NavigationBar = ({ user }) => {
  return (
    <Router>
      <div id="navLinks">
        <NavLink to="/products">
          <button className="categoryButton" type="button">
            All Products
          </button>
        </NavLink>
        <button className="categoryButton">Essential Oils</button>
        <button className="categoryButton">Supplements</button>
        <button className="categoryButton">Vitamins</button>
        <button className="categoryButton">Tonic</button>
        <button className="categoryButton">Tea</button>
      </div>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path={`/orderInfo/cart/${user.id}`} component={Cart} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/products/:productId" component={SingleProduct} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={SingleUser} />
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
