import React from "react";
import Product from "./product";

const BrowseProducts = (props) => {
  return (
    <>
      {props.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default BrowseProducts;
