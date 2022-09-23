import React, { Component } from "react";

class Product extends Component {
  state = {
    name: this.props.product.name,
    quantity: this.props.product.quantity,
  };

  addButtonOnClickHandler = (increment) => {
    this.setState({ quantity: this.state.quantity + increment });
  };

  render() {
    return (
      <div>
        <span>{this.state.name}</span>
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
          className="btn btn-success"
        >
          +
        </button>
      </div>
    );
  }
}

export default Product;
