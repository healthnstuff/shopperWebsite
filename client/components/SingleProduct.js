import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";

// const cartFromLocalStorage = localStorage.getItem("cart") || "[]";

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    this.state = { cart }
    this.selectedValue = ""
    this.handleChange = this.handleChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getSingleProduct(productId);
  }
  componentDidUpdate() {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }
  handleChange(e) {
      this.selectedValue = e.target.value; 
  }
  addToCart(product) {
    let newCart = [ ...this.state.cart ];
    let cartItem = newCart.find((item) => item.id === product.id);
    if (cartItem) {
        cartItem.quantity += parseInt(this.selectedValue)
    } else {
        cartItem = {
            ...product,
            quantity: parseInt(this.selectedValue)
        }
        newCart.push(cartItem);
    }
    this.setState({ ...this.state, cart: newCart })
  }
  render() {
    const product = this.props.singleProduct;
    return (
      <div key={product.id}>
        <img src={product.imageUrl} width="200" height="200" />
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <form onSubmit={() => this.addToCart(product)}>
          <label>
            Quantity:
            <select onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <input type="submit" value="Add To Cart" />
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    singleProduct: state.singleProduct,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
