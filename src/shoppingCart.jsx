import React, { Component } from "react";
import Product from './product';

class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", count: 3 },
      { id: 2, name: "Fries", count: 2 },
      { id: 3, name: "Cola", count: 1 },
    ],
  };
  render() {
    return (
      <>
        <h1>Shopping Cart</h1>
        <Product />
        <Product />
        <Product />
      </>
    );
  }
}

export default ShoppingCart;
