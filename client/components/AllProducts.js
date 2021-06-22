import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from '../store/products'
import { Link } from 'react-router-dom'

class AllProducts extends React.Component {
    componentDidMount() {
        this.props.getProducts()
    }
    render () {
        return (
            <div className="products">
                    {this.props.products.map(product => {
                        return ( 
                            <div key={product.id} className="product">
                                <div>
                                    <Link to={`/products/${product.id}`}>
                                            <img src={product.imageUrl} width="200" height="300"/>
                                            <p>{product.name}</p>
                                            <p>${product.price}</p>
                                    </Link>   
                                    <button className="allProductsButton">ADD TO CART</button>
                                 </div>
                            </div>
                        )
                    })}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
      products: state.products
    };
  };
  
const mapDispatch = (dispatch) => {
    return {
      getProducts: () => dispatch(fetchProducts()),
    }
};
  
export default connect(mapState, mapDispatch)(AllProducts);