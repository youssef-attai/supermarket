import React, { Component } from "react";
import Product from "./product";

class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", quantity: 3 },
      { id: 2, name: "Fries", quantity: 2 },
      { id: 3, name: "Cola", quantity: 1 },
    ],
  };
  render() {
    return (
      <>
        <h1>Shopping Cart</h1>
        {this.state.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </>
    );
  }
}

export default ShoppingCart;
