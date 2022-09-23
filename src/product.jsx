import React, { Component } from "react";

class Product extends Component {
  state = {
    name: "Burger",
    quantity: 0,
    imageUrl: "https://www.svgrepo.com/show/32704/burger.svg",
  };

  addButtonOnClickHandler = (increment) => {
    this.setState({ quantity: this.state.quantity + increment });
  };

  render() {
    return (
      <div>
        <img
          className="m-2"
          src={this.state.imageUrl}
          width="32px"
          alt="Product image"
        />
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
