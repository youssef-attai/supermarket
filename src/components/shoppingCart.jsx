import React, { Component } from "react";
import Product from "./product";

class ShoppingCart extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Burger",
        quantity: 0,
        image: "https://img.icons8.com/fluency/344/hamburger.png",
      },
      {
        id: 2,
        name: "Fries",
        quantity: 0,
        image: "https://img.icons8.com/fluency/344/french-fries.png",
      },
      {
        id: 3,
        name: "Cola",
        quantity: 0,
        image: "https://img.icons8.com/fluency/344/cola.png",
      },
    ],
  };

  onProductDeleteHandler = (productId) => {
    this.setState({
      products: this.state.products.filter(
        (product) => product.id !== productId
      ),
    });
  };

  onProductIncrementHandler = (productId) => {
    const newProducts = [...this.state.products];
    newProducts.find((product) => product.id === productId).quantity++;
    this.setState({
      products: newProducts,
    });
  };

  onResetAllHandler = () => {
    this.setState({
      products: this.state.products.map((product) => {
        product.quantity = 0;
        return product;
      }),
    });
  };

  render() {
    return (
      <>
        <h1 className="m-2">Shopping Cart</h1>
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.onProductDeleteHandler}
            onIncrement={this.onProductIncrementHandler}
          >
            <img width="32px" src={product.image} alt={`${product.name}`} />
          </Product>
        ))}
        <button
          className="btn btn-secondary m-2"
          onClick={this.onResetAllHandler}
        >
          Reset all
        </button>
      </>
    );
  }
}

export default ShoppingCart;
