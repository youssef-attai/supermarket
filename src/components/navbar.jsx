import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand ms-3">
        E-Commerce App
      </span>
      <a className="btn btn-dark position-relative me-3" href="/">
        <i className="fas fa-shopping-cart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.count}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
