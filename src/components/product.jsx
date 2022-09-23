import React, { Component } from "react";

class Product extends Component {

  render() {
    return (
      <div className="row">
        <div className="col">
          <span className="m-2">{this.props.children}</span>
          <span>{this.props.product.name}</span>
        </div>
        <div className="col text-end">
          <span
            className={`badge bg-${
              this.props.product.quantity === 0 ? "warning text-dark" : "primary text-light"
            } m-2`}
          >
            {this.props.product.quantity}
          </span>
          <button
            onClick={() => {
              this.props.onIncrement(this.props.product.id);
            }}
            className="btn btn-outline-primary btn-sm fas fa-add m-1"
          >
          </button>
          <button
            onClick={() => {
              this.props.onDecrement(this.props.product.id);
            }}
            className="btn btn-outline-primary btn-sm fas fa-minus m-1"
          >
          </button>
          <button
            onClick={() => {
              this.props.onReset(this.props.product.id);
            }}
            className="btn btn-outline-warning btn-sm fas fa-remove m-1"
          >
          </button>
          <button className="btn btn-light btn-sm m-1"
            onClick={() => {
              this.props.onDelete(this.props.product.id);
            }}
          >
            <i className="fas fa-trash text-danger"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
