import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage'
import Products from './Products'

const NavigationBar = () => {
  return (
    <Router>
      <div id="navBar">
        <nav>
          <h1 id="webName">Health N Stuff</h1>
          <div id="navLinks">
            <img src="./public/healthnstuff_logo.png" />
            <Link to="/" className="link"> Home </Link>
            <Link to="/products" className="link"> Products </Link>
          </div>
        </nav>
      </div>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={Products} />
          {/* <Route exact path="/products/:productId" component={} /> */}
      </div>
    </Router>
  );
};

export default NavigationBar;