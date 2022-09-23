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
              this.props.product.quantity === 0 ? "warning" : "primary"
            } m-2`}
          >
            {this.props.product.quantity}
          </span>
          <button
            onClick={() => {
              this.props.onIncrement(this.props.product.id);
            }}
            className="btn btn-success btn-sm fas fa-more m-2"
          >
            +
          </button>
          <span
            onClick={() => {
              this.props.onDelete(this.props.product.id);
            }}
          >
            <i className="fas fa-trash m-2"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
