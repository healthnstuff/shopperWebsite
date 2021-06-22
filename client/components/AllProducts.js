import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import { createOrder } from "../store/orderInfo";
import { Link } from "react-router-dom";

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
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
                <Link to="/orderInfo/:userId" className="addCartBtn">
                  ADD TO CART
                </Link>
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
