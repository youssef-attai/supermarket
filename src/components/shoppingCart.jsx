import React, { Component } from "react";
import Product from "./product";

class ShoppingCart extends Component {
  render() {
    return (
      <>
        <h1 className="m-2">Shopping Cart</h1>
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.props.onProductDeleteHandler}
            onIncrement={this.props.onProductIncrementHandler}
            onDecrement={this.props.onProductDecrementHandler}
            onReset={this.props.onProductResetHandler}
          >
            <img width="32px" src={product.image} alt={`${product.name}`} />
          </Product>
        ))}
        <button
          className="btn btn-warning text-dark m-2"
          onClick={this.props.onAllProductsResetHandler}
        >
          Reset all
        </button>
        <button
          className="btn btn-danger text-light m-2"
          onClick={this.props.onAllProductsDeleteHandler}
        >
          Delete all
        </button>
      </>
    );
  }
}

export default ShoppingCart;
