import React, { Component } from "react";

class Product extends Component {
  state = {
    name: "Burger",
    count: 3,
  };
  
  render() {
    return (
      <div>
        <span>{this.state.name}</span>
        <span className="badge bg-primary m-2">{this.state.count}</span>
      </div>
    );
  }
}

export default Product;
