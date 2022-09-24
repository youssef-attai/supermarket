import React, { Component } from "react";
import ShoppingCart from "./shoppingCart";
import NavBar from "./navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import ProductDetails from "./productDetails";
import NotFound from "./notFound";
import AboutCompany from "./aboutCompany";
import AboutTeam from "./aboutTeam";
import Products from "./products";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Burger",
        image: "https://img.icons8.com/fluency/344/hamburger.png",
        type: "food",
      },
      {
        id: 2,
        name: "Fries",
        image: "https://img.icons8.com/fluency/344/french-fries.png",
        type: "food",
      },
      {
        id: 3,
        name: "Cola",
        image: "https://img.icons8.com/fluency/344/cola.png",
        type: "drink",
      },
    ],
    cart: [],
  };

  onProductAdd = (productId) => {
    this.setState({
      cart: [...this.state.cart, { productId: productId, quantity: 1 }],
    });
  };

  onProductIncrementHandler = (productId) => {
    const newCart = [...this.state.cart];
    newCart.find((item) => item.productId === productId).quantity++;
    this.setState({
      cart: newCart,
    });
  };

  onProductDecrementHandler = (productId) => {
    let newCart = [...this.state.cart];
    const target = newCart.find((item) => item.productId === productId);
    if (target.quantity > 1) target.quantity--;
    else newCart = newCart.filter((item) => item.productId !== productId);
    this.setState({
      cart: newCart,
    });
  };

  onProductDeleteHandler = (productId) => {
    this.setState({
      cart: this.state.cart.filter((item) => item.productId !== productId),
    });
  };

  onAllProductsDeleteHandler = () => {
    this.setState({
      cart: [],
    });
  };

  render() {
    return (
      <>
        <NavBar
          count={this.state.cart.filter((item) => item.quantity > 0).length}
        />
        <Routes>
          <Route
            path="/contact"
            element={
              <p className="alert alert-secondary m-2 text-muted">
                This page is made for demonstrative purposes only. Please do{" "}
                <strong>NOT</strong> reach out to us or try to contact us.
              </p>
            }
          />
          <Route path="*" element={<></>} />
        </Routes>

        <main className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/about" element={<About />}>
              <Route path="team" element={<AboutTeam />} />
              <Route path="company" element={<AboutCompany />} />
              <Route index element={<p>General about</p>} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  products={this.state.products}
                  cart={this.state.cart}
                  onProductDeleteHandler={this.onProductDeleteHandler}
                  onProductIncrementHandler={this.onProductIncrementHandler}
                  onProductDecrementHandler={this.onProductDecrementHandler}
                  onAllProductsDeleteHandler={this.onAllProductsDeleteHandler}
                />
              }
            />
            <Route path="/products">
              <Route
                path=":id"
                element={
                  <ProductDetails
                    onAdd={this.onProductAdd}
                    products={this.state.products}
                    cart={this.state.cart}
                  />
                }
              />
              <Route
                index
                element={
                  <Products products={this.state.products} />
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
