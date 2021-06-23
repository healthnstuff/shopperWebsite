import React from "react";
import { connect } from "react-redux";
// import { fetchCart } from "../store/cart";
// import { fetchSingleProduct } from "../store/singleProduct";
import { updateOrder } from "../store/orderInfo";
// import { updateCartItem, deleteCartItem } from "../store/cartItem";
import { Link } from "react-router-dom";

const cartFromLocalStorage = localStorage.getItem("cart") || "[]";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], status: false, cart: cartFromLocalStorage };
    this.handleCheckout = this.handleCheckout.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({ products: [...this.state.cart] });
  }

  componentDidUpdate() {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  handleCheckout() {
    this.props.checkout(this.props.user.id);
    this.setState({ status: true });
  }

  increment(evt) {
    evt.preventDefault();
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

  handleDelete(evt) {
    evt.preventDefault();
    const parent = evt.target.parentElement;
    const productId = Number(parent.getAttribute("accessiblekey"));
    const body = { product: productId };
    this.props.deleteItem(this.props.match.params.userId, body);
  }

  render() {
    console.log("STATE", this.state);
    const products = this.state.products;
    console.log(products.find((item) => item.id === 1));

    const isCheckedOut = this.state.status;
    return (
      <div>
        {/* {isCheckedOut ? (
          <h1>Your Order Is All Set! Come Again Next Time ~~</h1>
        ) : (
          <div>
            {products.map((product, index) => {
              return (
                <div
                  key={product.id}
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
                  <button type="button" onClick={this.handleDelete}>
                    {" "}
                    DELETE ITEM
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
        )} */}
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
    user: state.auth,
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
