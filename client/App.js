import React from "react";
import LoggingIn from "./components/LoggingIn";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";

class App extends React.Component {
  componentDidMount() {
    this.localAdapter.saveCart([]);
  }

  localAdapter = {
    saveCart: function (array) {
      var stringified = JSON.stringify(array);
      localStorage.setItem("cart", stringified);
      return true;
    },
    getCart: function () {
      const cart = JSON.parse(localStorage.getItem("cart"));
      let newCart = [];
      for (let i = 0; i < cart.length; i++) {
        newCart.push(JSON.parse(cart[i]))
      }
      return newCart;
    },
    clearCart: function () {
      localStorage.removeItem("cart");
    },
    addToCart: function (product) {
      let array = this.getCart();
      let newArray = [...array, product];
      this.saveCart(newArray);
    },
    deleteFromCart: function (product) {
      let array = this.getCart();
      let newArray = array.filter((item) => item.id !== product.id);
      this.saveCart(newArray);
    }
  };

  render() {
    return (
      <div id="app">
        <LoggingIn />
        <NavigationBar props={this.localAdapter} />
      </div>
    );
  }
}

export default App;
