import React, { Component } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

class About extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>About</h1>
        <div className="row">
          <div className="col-3">
            <ul>
              <li>
                <Link to="/about/team">Our team</Link>
              </li>
              <li>
                <Link to="/about/company">Our company</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <Outlet context={{ test: "wow" }} />
          </div>
        </div>
      </>
    );
  }
}

export default About;
