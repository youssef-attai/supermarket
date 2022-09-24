import React, { Component } from "react";
import ShoppingCart from "./shoppingCart";
import NavBar from "./navbar";
import { Route, Routes } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import ProductDetails from "./productDetails";
import NotFound from "./notFound";
import AboutCompany from "./aboutCompany";
import AboutTeam from "./aboutTeam";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Burger",
        quantity: 0,
        image: "https://img.icons8.com/fluency/344/hamburger.png",
      },
      {
        id: 2,
        name: "Fries",
        quantity: 0,
        image: "https://img.icons8.com/fluency/344/french-fries.png",
      },
      {
        id: 3,
        name: "Cola",
        quantity: 0,
        image: "https://img.icons8.com/fluency/344/cola.png",
      },
    ],
  };

  onProductDeleteHandler = (productId) => {
    this.setState({
      products: this.state.products.filter(
        (product) => product.id !== productId
      ),
    });
  };

  onProductIncrementHandler = (productId) => {
    const newProducts = [...this.state.products];
    newProducts.find((product) => product.id === productId).quantity++;
    this.setState({
      products: newProducts,
    });
  };

  onProductDecrementHandler = (productId) => {
    const newProducts = [...this.state.products];
    const target = newProducts.find((product) => product.id === productId);
    if (target.quantity > 0) target.quantity--;
    this.setState({
      products: newProducts,
    });
  };

  onProductResetHandler = (productId) => {
    const newProducts = [...this.state.products];
    newProducts.find((product) => product.id === productId).quantity = 0;
    this.setState({
      products: newProducts,
    });
  };

  onAllProductsResetHandler = () => {
    this.setState({
      products: this.state.products.map((product) => {
        product.quantity = 0;
        return product;
      }),
    });
  };

  onAllProductsDeleteHandler = () => {
    this.setState({
      products: [],
    });
  };

  render() {
    return (
      <>
        <NavBar
          count={
            this.state.products.filter((product) => product.quantity > 0).length
          }
        />
        <main className="container">
          <Routes>
            <Route
              path="/products/:id"
              element={<ProductDetails products={this.state.products} />}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="team" element={<AboutTeam />} />
              <Route path="company" element={<AboutCompany />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  products={this.state.products}
                  onProductDeleteHandler={this.onProductDeleteHandler}
                  onProductIncrementHandler={this.onProductIncrementHandler}
                  onProductDecrementHandler={this.onProductDecrementHandler}
                  onProductResetHandler={this.onProductResetHandler}
                  onAllProductsResetHandler={this.onAllProductsResetHandler}
                  onAllProductsDeleteHandler={this.onAllProductsDeleteHandler}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
