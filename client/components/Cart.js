import React from "react";
import { connect } from "react-redux";
import { updateOrder, createOrder, getOrder } from "../store/orderInfo";
import { Link } from "react-router-dom";
import { fetchSingleProduct } from "../store/singleProduct";
import { fetchCart } from "../store/cart";
import { updateCartItem } from "../store/cartItem";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    cart.forEach((item) => (item.backendQuant = 0));
    this.state = {
      products: [],
      status: false,
      cart,
      cartLength: cart.length,
    };
    this.handleCheckout = this.handleCheckout.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.combineCarts = this.combineCarts.bind(this);
  }

  componentDidMount() {
    this.setState({ products: [...this.state.cart] });
    this.props.getOrder(this.props.user.id).then((res) => {
      if (res.payload.some((order) => order.status === "open")) {
        this.combineCarts();
      } else {
        this.props.createOrder(this.props.user.id);
      }
    });
  }

  componentDidUpdate() {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
    if (this.state.cart.length !== this.state.cartLength) {
      this.setState(
        {
          products: [...this.state.cart],
          cartLength: this.state.cart.length,
        },
        () => this.combineCarts()
      );
    }
  }

  combineCarts() {
    this.props.loadCart(this.props.user.id).then((res) =>
      res.map((item) =>
        item.then((item) => {
          if (this.state.products.some((product) => product.id === item.id)) {
            let newProducts = [...this.state.products];
            let productItem = newProducts.find(
              (product) => product.id === item.id
            );
            let cartItem = this.state.cart.find(
              (product) => product.id === item.id
            );
            if (cartItem) {
              productItem.quantity =
                productItem.quantity + item.quantity - cartItem.backendQuant;
              cartItem.backendQuant = item.quantity;
            } else {
              productItem.quantity = item.quantity;
            }
            let newCart = [...this.state.cart];
            this.setState({ products: newProducts, cart: newCart });
          } else {
            this.setState({
              products: [...this.state.products, item],
            });
          }
        })
      )
    );
  }

  handleCheckout() {
    this.props.checkout(this.props.user.id);
    this.setState({ status: true });
    localStorage.removeItem("cart"); //not working
  }

  increment(product) {
    //currently has to do one or the other
    // const body = {
    //   product: product.id,
    //   change: "increase",
    //   quantity: 1,
    // };
    // this.props.updateItem(this.props.user.id, body);
    let newCart = [...this.state.cart];
    let cartItem = newCart.find((item) => item.id === product.id);
    cartItem.quantity++;
    this.setState({ cart: newCart });
  }

  decrement(product) {
    // const body = {
    //   product: product.id,
    //   change: "decrease",
    //   quantity: 1,
    // };
    // this.props.updateItem(this.props.user.id, body);
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
    this.setState({ products: newCart, cart: newCart });
  }

  render() {
    const products = this.state.products;
    const isCheckedOut = this.state.status;
    let total = 0;
    return (
      <div>
        {isCheckedOut ? (
          <div>
            <h1
              style={{
                fontSize: "40px",
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              Your Order Is All Set! Come Again Next Time ~~
            </h1>
            <img
              src="https://i.pinimg.com/736x/e1/77/3a/e1773a423d85a263e99a76ba2bcaf78a.jpg"
              alt="cute cartoon plant"
              style={{ marginLeft: "300px" }}
            />
          </div>
        ) : (
          <div className="cart">
            {products.map((product) => {
              total += product.price;
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
            <div className="checkout">
              <p
                style={{
                  fontSize: "40px",
                  color: "#A55093",
                  margin: "10px",
                  fontWeight: "bold",
                }}
              >{`Your total is: ${total} USD.`}</p>
              <button
                type="button"
                className="checkoutBtn"
                onClick={this.handleCheckout}
              >
                Check Out!{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // cart: state.cart,
    products: state.products,
    order: state.orders,
    // cartItem: state.product,
    user: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCart: (id) => {
      return dispatch(fetchCart(id)).then((res) => {
        return Promise.all(res.payload).then((payload) => {
          return payload.map((item) => {
            const quantity = item.quantity;
            return dispatch(fetchSingleProduct(item.productId)).then((res) => {
              res.product["quantity"] = quantity;
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
    createOrder: (id) => {
      dispatch(createOrder(id));
    },
    getOrder: (id) => {
      return dispatch(getOrder(id));
    },
    updateItem: (id, body) => {
      dispatch(updateCartItem(id, body));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
