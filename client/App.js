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
      return JSON.parse(localStorage.getItem("cart"));
    },
    clearCart: function () {
      localStorage.removeItem("cart");
    },
    addToCart: function (id) {
      let array = this.getCart();
      let newArray = [...array, id];
      this.saveCart(newArray);
    },
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
