import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage'
import AllProducts from './AllProducts'

const NavigationBar = () => {
  return (
    <Router>
      <div id="navBar">
        <nav>
          <div id="navLinks">
            <a href="/">
             <img src="healthnstuff_finalLogo.png" alt="Logo" width="200px" heigh="100px" />
            </a>
            <Link to="/" className="link"> Home </Link>
            <Link to="/products" className="link"> Products </Link>
          </div>
        </nav>
      </div>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={AllProducts} />
          {/* <Route exact path="/products/:productId" component={} /> */}
      </div>
    </Router>
  );
};

export default NavigationBar;