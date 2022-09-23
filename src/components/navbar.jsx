import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand ms-3" href="/">
        E-Commerce App
      </a>
      <span className="badge bg-danger me-2">{props.count}</span>
    </nav>
  );
};

export default NavBar;
