import React, { Component } from "react";

class Product extends Component {
  state = {
    id: this.props.product.id,
    name: this.props.product.name,
    quantity: this.props.product.quantity,
  };

  addButtonOnClickHandler = (increment) => {
    this.setState({ quantity: this.state.quantity + increment });
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <span className="m-2">{this.props.children}</span>
          <span>{this.state.name}</span>
        </div>
        <div className="col">
          <span
            className={`badge bg-${
              this.state.quantity === 0 ? "warning" : "primary"
            } m-2`}
          >
            {this.state.quantity}
          </span>
          <button
            onClick={() => {
              this.addButtonOnClickHandler(1);
            }}
            className="btn btn-success btn-sm fas fa-more m-2"
          >
            +
          </button>
          <span
            onClick={() => {
              this.props.onDelete(this.state.id);
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
