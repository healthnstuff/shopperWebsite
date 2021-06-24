import React from "react";
import { Link } from "react-router-dom";

class IndividualProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { added: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ added: true }, () => {
      setTimeout(() => this.setState({ added: false }), 1000);
      this.props.addToCart(this.props.product);
    });
  }

  render() {
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
          onClick={this.handleClick}
        >
          {this.state.added ? "ADDED!" : "ADD TO CART"}
        </button>
      </div>
    );
  }
}

export default IndividualProduct;
