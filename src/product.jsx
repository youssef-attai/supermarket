import React, { Component } from "react";

class Product extends Component {
  state = {
    name: "Burger",
    quantity: 1,
    imageUrl: "https://www.svgrepo.com/show/32704/burger.svg",
    ingredients: ["Bread", "Meat", "Cheese", "Tomatoes", "Ketchup"],
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
        <ul>
          {this.state.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
        </ul>
      </div>
    );
  }
}

export default Product;
