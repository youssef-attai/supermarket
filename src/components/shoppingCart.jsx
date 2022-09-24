import React from "react";
import CartItem from "./cartItem";

const ShoppingCart = (props) => {
  return (
    <>
      <h1 className="m-4 text-center">Cart</h1>
      {props.cart.map((item) => {
        const product = props.products.find(
          (prdct) => prdct.id === item.productId
        );
        return (
          <CartItem
            key={product.id}
            product={product}
            quantity={item.quantity}
            onDelete={props.onProductDeleteHandler}
            onIncrement={props.onProductIncrementHandler}
            onDecrement={props.onProductDecrementHandler}
          >
            <img width="32px" src={product.image} alt={`${product.name}`} />
          </CartItem>
        );
      })}
      {props.cart.length > 0 ? (
        <button
          className="btn btn-danger text-light m-2"
          onClick={props.onAllProductsDeleteHandler}
        >
          Delete all
        </button>
      ) : (
        <p className="text-muted m-2 text-center">Your shopping cart is empty</p>
      )}
    </>
  );
};

export default ShoppingCart;
