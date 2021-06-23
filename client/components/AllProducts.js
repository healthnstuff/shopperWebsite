import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import { Link } from "react-router-dom";

const cartFromLocalStorage = localStorage.getItem("cart") || "[]";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: cartFromLocalStorage };
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    this.props.getProducts();
  }

  componentDidUpdate() {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  addToCart(product) {
    let newCart = [...this.state.cart];
    let cartItem = newCart.find((item) => item.id === product.id);
    //first cartItem is undefined
    // console.log("cartItem = ", cartItem);
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
    return (
      <div className="allProducts">
        {this.props.products.map((product) => {
          return (
            <div key={product.id} className="product">
              <Link to={`/products/${product.id}`}>
                <div>
                  <img src={product.imageUrl} width="200" height="200" />
                  <p>Name: {product.name}</p>
                  <p>Price: {product.price}</p>
                </div>
              </Link>
              <button
                type="button"
                className="addToCartBtn"
                onClick={() => this.addToCart(product)}
              >
                ADD TO CART
              </button>
            </div>
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
