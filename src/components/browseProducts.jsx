import React from "react";
import Product from "./product";

const BrowseProducts = (props) => {
  return (
    <>
      <h1 className="m-4 text-center">Products</h1>
      <div className="row row-cols-auto">
        {props.products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </>
  );
};

export default BrowseProducts;
