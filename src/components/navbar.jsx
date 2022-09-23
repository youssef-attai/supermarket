import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark p-3">
      <div className="container-fluid">
        <Link className="navbar-brand ms-3" to="/">
          E-Commerce App
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
        <div
          className="collapse navbar-collapse justify-content"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link className="btn btn-dark position-relative me-3" to="/cart">
        <i className="fas fa-shopping-cart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.count}
        </span>
      </Link>
    </nav>
  );
};

export default NavBar;
