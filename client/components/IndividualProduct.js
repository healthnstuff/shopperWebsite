import React from "react";
import { Link } from "react-router-dom";

class IndividualProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { added: false };
  }

  componentDidMount() {
    this.setState({ added: this.props.added });
  }

  render() {
    console.log("HERE", this.state.added);
    const product = this.props.product;
    return (
      <div key={product.id} className="product">
        <Link to={`/products/${product.id}`}>
          <div>
            <img src={product.imageUrl} width="200" height="200" />
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
          </div>
        </Link>
        <button
          type="button"
          className="addToCartBtn"
          onClick={() => this.props.addToCart(product)}
        >
          {this.state.added ? "ADDED!" : "ADD TO CART"}
        </button>
      </div>
    );
  }
}

export default IndividualProduct;
