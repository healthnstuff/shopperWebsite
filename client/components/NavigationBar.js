import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from "../Routes";
import { FaShoppingCart } from "react-icons/fa";

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
            <a href="/">
              <img
                src="healthnstuff_finalLogo.png"
                alt="Logo"
                width="200px"
                heigh="100px"
              />
            </a>
            <Link to="/" className="link">
              {" "}
              Home{" "}
            </Link>
            <Link to="/products" className="link">
              {" "}
              Products{" "}
            </Link>
            <Link to="/orderInfo/cart/:userId" className="cartIcon">
              {" "}
              <FaShoppingCart />
            </Link>
            <Routes />
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
