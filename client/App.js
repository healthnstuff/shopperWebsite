import React from "react";

import Navbar from "./components/Navbar";
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
  };

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <Routes /> */}
        <NavigationBar />
        <Navbar />
        <HomePage props={this.localAdapter} />
      </div>
    );
  }
}

export default App;
