import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../src/logo.png";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark p-3">
        <div className="container-fluid">
          <Link className="navbar-brand ms-3" to="/home">
            <img width="32px" className="me-2" src={Logo} alt={"App logo"}/>
            <strong>Supermarket</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <NavLink className={this.navLinkActiveClass()} to="/home">
                Home
              </NavLink>
              <NavLink className={this.navLinkActiveClass()} to="/products">
                Products
              </NavLink>
              <NavLink className={this.navLinkActiveClass()} to="/about">
                About
              </NavLink>
              <NavLink className={this.navLinkActiveClass()} to="/contact">
                Contact us
              </NavLink>
              <NavLink className={this.navLinkActiveClass()} to="/login">
                Login
              </NavLink>
            </div>
          </div>
        </div>
        <NavLink className="btn btn-dark position-relative me-3" to="/cart">
          <i className="fas fa-shopping-cart" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {this.props.count}
          </span>
        </NavLink>
      </nav>
    );
  }

  navLinkActiveClass() {
    return ({ isActive }) => {
      return `text-center nav-link ${isActive ? "active" : ""}`;
    };
  }
}

export default NavBar;
