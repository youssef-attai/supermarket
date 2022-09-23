import React, { Component } from "react";

class Product extends Component {
  state = {
    name: "Burger",
    count: 1,
    imageUrl: "https://www.svgrepo.com/show/32704/burger.svg",
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
            this.state.count === 0 ? "warning" : "primary"
          } m-2`}
        >
          {this.state.count}
        </span>
      </div>
    );
  }
}

export default Product;
