import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link,
} from "react-router-dom";
import Routes from "../Routes";
import CartIcon from "./CartIcon";
import { fetchProducts } from "../store/products";

import HomePage from "./HomePage";
import Cart from "./Cart";
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";
import { connect } from "react-redux";
import Users from "./Users";
import SingleUser from "./SingleUser";
import { Signup } from "./AuthForm";

class NavigationBar extends React.Component {
  constructor() {
    super();
    this.state = { chosenProducts: [] };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getProducts();
  }
  handleClick(evt) {
    console.log("evt", evt.target.value);
    const categoryId = parseInt(evt.target.value);
    const filteredProducts = this.props.products.filter(
      (product) => product.categoryId === categoryId
    );
    this.setState({ chosenProducts: filteredProducts });
  }
  render() {
    console.log("chose products", this.state.chosenProducts);
    const { user } = this.props;
    const { products } = this.props;
    return (
      <Router>
        <div id="navLinks">
          <Link to={`/orderInfo/cart/${user.id}`} className="cartIcon">
            {" "}
            <CartIcon />
          </Link>
          <NavLink to="/products">
            <button className="categoryButton" type="button">
              All Products
            </button>
          </NavLink>
          <button
            className="categoryButton"
            type="button"
            value="1"
            onClick={(evt) => this.handleClick(evt)}
          >
            Essential Oils
          </button>
          <button
            className="categoryButton"
            type="button"
            value="2"
            onClick={(evt) => this.handleClick(evt)}
          >
            Supplements
          </button>
          <button
            className="categoryButton"
            type="button"
            value="3"
            onClick={(evt) => this.handleClick(evt)}
          >
            Vitamins
          </button>
          <button
            className="categoryButton"
            type="button"
            value="4"
            onClick={(evt) => this.handleClick(evt)}
          >
            Tonic
          </button>
          <button
            className="categoryButton"
            type="button"
            value="5"
            onClick={(evt) => this.handleClick(evt)}
          >
            Tea
          </button>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path={`/orderInfo/cart/${user.id}`} component={Cart} />
            <Route
              exact
              path="/products"
              render={() => (
                <AllProducts chosenProducts={this.state.chosenProducts} />
              )}
            />
            <Route
              exact
              path="/products/:productId"
              component={SingleProduct}
            />
            <Route exact path="/users" component={Users} />
            <Route exact path={`/users/${user.id}`} component={SingleUser} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(NavigationBar);
