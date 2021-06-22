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

const NavigationBar = (props) => {
  // console.log(props);
  return (
    <Router>
      <div id="navBar">
        <nav>
          <div id="navLinks">
            <div id="categories">
              <NavLink to="/products" className="navLink">
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
          </div>
        </nav>
      </div>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path={`/orderInfo/cart/${props.user.id}`}
          component={Cart}
        />
        <Route
          exact
          path="/products"
          render={() => <AllProducts cartAdapter={props.props} />}
        />
        <Route exact path="/products/:productId" component={SingleProduct} />
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
