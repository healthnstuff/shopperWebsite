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
    console.log("FUCK", this.props);
    return (
      <div>
        <h1>this is the cart</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCart: (id) => dispatch(fetchCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
