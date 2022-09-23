import React, { Component } from "react";
import ShoppingCart from "./shoppingCart";
import NavBar from "./navbar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <ShoppingCart />
        </main>
      </>
    );
  }
}

export default App;
