import React, { Component } from "react";
import Product from "./product";

class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", quantity: 0, image: "https://img.icons8.com/fluency/344/hamburger.png" },
      { id: 2, name: "Fries", quantity: 0, image: "https://img.icons8.com/fluency/344/french-fries.png" },
      { id: 3, name: "Cola", quantity: 0, image: "https://img.icons8.com/fluency/344/cola.png" },
    ],
  };
  render() {
    return (
      <>
        <h1>Shopping Cart</h1>
        {this.state.products.map((product) => (
          <Product key={product.id} product={product}>
            <img width="32px" src={product.image} alt={`${product.name} image`} />
          </Product>
        ))}
      </>
    );
  }
}

export default ShoppingCart;
