import React from "react";
import { connect } from "react-redux";
import { fetchCart } from "../store/cart";
import { fetchSingleProduct } from "../store/singleProduct";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
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

  render() {
    const products = this.state.products;
    console.log(products);
    return (
      <div>
        {products.map((product) => {
          return (
            <div key={product.id} className="cartItem">
              <img src={product.imageUrl} width="100" height="100"></img>
              <Link to={`/products/${product.id}`}>
                <p>{product.name}</p>
              </Link>
              <p>{`$ ${product.price}`}</p>
            </div>
          );
        })}
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
    products: state.products,
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
