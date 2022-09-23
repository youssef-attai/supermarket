import React from "react";
import Product from "./product";

const ShoppingCart = (props) => {
  return (
    <>
      <h1 className="m-2">Shopping Cart</h1>
      {props.products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDelete={props.onProductDeleteHandler}
          onIncrement={props.onProductIncrementHandler}
          onDecrement={props.onProductDecrementHandler}
          onReset={props.onProductResetHandler}
        >
          <img width="32px" src={product.image} alt={`${product.name}`} />
        </Product>
      ))}
      <button
        className="btn btn-warning text-dark m-2"
        onClick={props.onAllProductsResetHandler}
      >
        Reset all
      </button>
      <button
        className="btn btn-danger text-light m-2"
        onClick={props.onAllProductsDeleteHandler}
      >
        Delete all
      </button>
    </>
  );
};

export default ShoppingCart;
