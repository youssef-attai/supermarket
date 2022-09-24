import React from "react";
import Product from "./product";

const BrowseProducts = (props) => {
  return (
    <>
      <h1 className="m-2">Products</h1>
      <div className="row row-cols-auto">
        {props.products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </>
  );
};

export default BrowseProducts;
