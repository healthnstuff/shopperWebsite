import React from "react";
import { connect } from "react-redux";
import { updateOrder } from "../store/orderInfo";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    this.state = { products: [], status: false, cart };
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
    //clear localStorage
    //make backend request
  }

  increment(product) {
    let newCart = [...this.state.cart];
    let cartItem = newCart.find((item) => item.id === product.id);
    cartItem.quantity++;
    this.setState({ cart: newCart });
  }

  decrement(product) {
    let newCart = [...this.state.cart];
    let cartItem = newCart.find((item) => item.id === product.id);
    if (cartItem.quantity === 0) return;
    cartItem.quantity--;
    this.setState({ cart: newCart });
  }

  handleDelete(product) {
    let newCart = [...this.state.cart];
    newCart = newCart.filter((item) => {
      return item.id !== product.id;
    });
    this.setState({ cart: newCart });
  }

  render() {
    console.log(this.props);
    const products = this.state.products;
    const isCheckedOut = this.state.status;
    return (
      <div>
        {isCheckedOut ? (
          <h1>Your Order Is All Set! Come Again Next Time ~~</h1>
        ) : (
          <div>
            {products.map((product) => {
              return (
                <div key={product.id} className="cartItem">
                  <img src={product.imageUrl} width="100" height="100"></img>
                  <Link to={`/products/${product.id}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p>{`$ ${product.price}`}</p>
                  <p>{`Quantity: ${product.quantity}`}</p>
                  <button type="button" onClick={() => this.increment(product)}>
                    +
                  </button>
                  <button type="button" onClick={() => this.decrement(product)}>
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => this.handleDelete(product)}
                  >
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
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // cart: state.cart,
    // products: state.products,
    order: state.order,
    // cartItem: state.product,
    user: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // loadCart: (id) => {
    //   return dispatch(fetchCart(id)).then((res) => {
    //     return Promise.all(res.payload).then((payload) => {
    //       return payload.map((item) => {
    //         return dispatch(fetchSingleProduct(item.productId)).then((res) => {
    //           return res.product;
    //         });
    //       });
    //     });
    //   });
    // },
    // fetchProduct: (productId) => dispatch(fetchSingleProduct(productId)),
    checkout: (id) => {
      dispatch(updateOrder(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
