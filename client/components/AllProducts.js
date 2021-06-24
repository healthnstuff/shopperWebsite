import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import { Link } from "react-router-dom";
import IndividualProduct from "./IndividualProduct";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    //I worry that this is the issue causing the state to be set even when we clear it
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    this.state = { cart };
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    this.props.getProducts();
  }

  componentDidUpdate() {
    console.log("updating local storage in cart")
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  addToCart(product) {
    let newCart = [...this.state.cart];
    let cartItem = newCart.find((item) => item.id === product.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cartItem = {
        ...product,
        quantity: 1,
      };
      newCart.push(cartItem);
    }
    this.setState({ cart: newCart });
  }

  render() {
    const productsToRender = this.props.chosenProducts.length ? this.props.chosenProducts : this.props.products
    return (
      <div className="allProducts">
        {productsToRender.map((product) => {
          return (
            <IndividualProduct
              product={product}
              addToCart={this.addToCart}
              key={product.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
