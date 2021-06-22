import React from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Routes from "../Routes";


import HomePage from "./HomePage";
import Cart from "./Cart";
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";

const NavigationBar = () => {
  return (
    <Router>
      <div id="navBar">
        <nav>
          <div id="navLinks">
            <div id="categories">
              <NavLink to="/products" className="navLink">
                <button className="categoryButton" type="button">All Products</button>
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
        <Route exact path="/orderInfo/cart/:userId" component={Cart} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/products/:productId" component={SingleProduct} />
      </div>
    </Router>
  );
};

export default NavigationBar;
