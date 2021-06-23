import React from "react";
import LoggingIn from "./components/LoggingIn";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";

class App extends React.Component {
  componentDidMount() {
    // this.localAdapter.saveCart([]);
  }

  render() {
    return (
      <div id="app">
        <LoggingIn />
        <NavigationBar />
      </div>
    );
  }
}
//props={this.localAdapter}

export default App;
