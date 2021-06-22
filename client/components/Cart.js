import React from "react";
import { connect } from "react-redux";
import { fetchCart } from "../store/cart";

class Cart extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadCart(this.props.match.params.userId);
  }

  render() {
    console.log("PROPS", this.props);
    return (
      <div>
        <h1>this is the cart</h1>
        <button type="button" className="checkoutBtn">
          Check Out!{" "}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCart: (id) => dispatch(fetchCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
