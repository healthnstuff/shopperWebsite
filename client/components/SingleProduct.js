import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";

class SingleProduct extends React.Component {
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getSingleProduct(productId);
  }
  render() {
    const product = this.props.singleProduct;
    return (
      <div key={product.id} className="productContainer">
        <img
          src={product.imageUrl}
          width="200"
          height="200"
          className="productImg"
        />
        <div className="productDescription">
          <p style={{ fontSize: "40px", fontWeight: "bold" }}>
            Name: {product.name}
          </p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <span>Quantity: </span>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button>ADD TO CART</button>
        </div>
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
