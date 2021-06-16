import React from "react";

class Products extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [{
                name: 'apple',
                imageURL: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?w=641&ssl=1',
                description: 'organic apples',
                quantity: 10,
                price: 1.50,
                category: 'vegetables'
            }]
        }
    }
    render () {
        return (
            <div>
                <div>
                {this.state.products.map(product => {
                    return ( 
                            <div>
                                <img src={product.imageURL} width="200" height="200"/>
                                <p>Name: {product.name}</p>
                                <p>Decription: {product.description}</p>
                                <span>Quantity: </span> 
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>   
                                <p>Price: {product.price}</p>
                                <p>Category: {product.category}</p>
                            </div>
                           )
                    })}
                </div>
            </div>
        )
    }
}

export default Products