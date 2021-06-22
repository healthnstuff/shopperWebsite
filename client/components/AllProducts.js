import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import { createOrder } from "../store/orderInfo";
import { Link } from "react-router-dom";

class AllProducts extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    this.props.getProducts();
  }

  addToCart(evt) {
    const product = evt.target.value;
    this.props.cartAdapter.addToCart(product);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.products.map((product) => {
            return (
              <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <div>
                    <img src={product.imageUrl} width="200" height="200" />
                    <p>Name: {product.name}</p>
                    <p>Price: {product.price}</p>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={this.addToCart}
                  value={product.id}
                >
                  ADD TO CART
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,
    order: state.order,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    createOrder: (id) => dispatch(createOrder(id)),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
