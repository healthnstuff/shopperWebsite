import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import { Link } from "react-router-dom";
import IndividualProduct from "./IndividualProduct";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
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
    return (
      <div className="allProducts">
        {this.props.products.map((product) => {
          return (
            <IndividualProduct
              product={product}
              addToCart={this.addToCart}
              key={product.id}
            />
            // <div key={product.id} className="product">
            //   <Link to={`/products/${product.id}`}>
            //     <div>
            //       <img src={product.imageUrl} width="200" height="200" />
            //       <p>Name: {product.name}</p>
            //       <p>Price: {product.price}</p>
            //     </div>
            //   </Link>
            //   <button
            //     type="button"
            //     className="addToCartBtn"
            //     onClick={() => this.addToCart(product)}
            //   >
            //     {this.state.added ? "ADDED!" : "ADD TO CART"}
            //   </button>
            // </div>
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
