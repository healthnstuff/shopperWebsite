import React from "react";
import { connect } from "react-redux";
import { fetchCart } from "../store/cart";
import { fetchSingleProduct } from "../store/singleProduct";
import { updateOrder } from "../store/orderInfo";
import { updateCartItem } from "../store/cartItem";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = { products: [], status: false };
    this.handleCheckout = this.handleCheckout.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    this.props.loadCart(this.props.match.params.userId).then((res) =>
      res.map((item) =>
        item.then((item) => {
          this.setState({ products: [...this.state.products, item] });
        })
      )
    );
  }

  handleCheckout() {
    this.props.checkout(this.props.match.params.userId);
    this.setState({ status: true });
  }

  increment(evt) {
    evt.preventDefault();
    const parent = evt.target.parentElement;
    const productId = Number(parent.getAttribute("accessiblekey"));
    const body = {
      product: productId,
      change: "increase",
      quantity: 1,
    };
    this.props.updateItem(this.props.match.params.userId, body);
  }

  decrement(evt) {
    evt.preventDefault();
    const parent = evt.target.parentElement;
    const productId = Number(parent.getAttribute("accessiblekey"));
    const body = {
      product: productId,
      change: "decrease",
      quantity: 1,
    };
    this.props.updateItem(this.props.match.params.userId, body);
  }

  render() {
    const products = this.state.products;
    const isCheckedOut = this.state.status;
    return (
      <div>
        {isCheckedOut ? (
          <h1>Your Order Is All Set! Come Again Next Time ~~</h1>
        ) : (
          <div>
            {products.map((product, index) => {
              return (
                <div
                  key={product.id}
                  accessiblekey={product.id}
                  className="cartItem"
                >
                  <img src={product.imageUrl} width="100" height="100"></img>
                  <Link to={`/products/${product.id}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p>{`$ ${product.price}`}</p>
                  <p>{`Quantity: ${this.props.cart[index].quantity}`}</p>
                  <button type="button" onClick={this.increment}>
                    +
                  </button>
                  <button type="button" onClick={this.decrement}>
                    -
                  </button>
                </div>
              );
            })}
            <button
              type="button"
              className="checkoutBtn"
              onClick={this.handleCheckout}
            >
              Check Out!{" "}
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
    order: state.order,
    cartItem: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCart: (id) => {
      return dispatch(fetchCart(id)).then((res) => {
        return Promise.all(res.payload).then((payload) => {
          return payload.map((item) => {
            return dispatch(fetchSingleProduct(item.productId)).then((res) => {
              return res.product;
            });
          });
        });
      });
    },
    fetchProduct: (productId) => dispatch(fetchSingleProduct(productId)),
    checkout: (id) => {
      dispatch(updateOrder(id));
    },
    updateItem: (id, body) => {
      dispatch(updateCartItem(id, body));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
