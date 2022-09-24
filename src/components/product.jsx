import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="col text-center">
      <Link to={`/products/${props.product.id}`} className="card mb-2">
        <img
          src={props.product.image}
          alt={`${props.product.name}`}
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">{props.product.name}</h3>
          <p className="card-text">{props.product.type}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
