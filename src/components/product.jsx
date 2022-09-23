import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="row">
      <Link to={`/products/${props.product.id}`}>
        <div className="col">
          <span className="m-2">{props.children}</span>
          <span>{props.product.name}</span>
        </div>
      </Link>
      <div className="col text-end">
        <span
          className={`badge bg-${
            props.product.quantity === 0
              ? "warning text-dark"
              : "primary text-light"
          } m-2`}
        >
          {props.product.quantity}
        </span>
        <button
          onClick={() => {
            props.onIncrement(props.product.id);
          }}
          className="btn btn-outline-primary btn-sm fas fa-add m-1"
        ></button>
        <button
          onClick={() => {
            props.onDecrement(props.product.id);
          }}
          className="btn btn-outline-primary btn-sm fas fa-minus m-1"
        ></button>
        <button
          onClick={() => {
            props.onReset(props.product.id);
          }}
          className="btn btn-outline-warning btn-sm fas fa-remove m-1"
        ></button>
        <button
          className="btn btn-light btn-sm m-1"
          onClick={() => {
            props.onDelete(props.product.id);
          }}
        >
          <i className="fas fa-trash text-danger"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
