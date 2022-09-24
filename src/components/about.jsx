import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class About extends Component {
  state = {};
  render() {
    return (
      <>
        <h1 className="m-4 text-center">About us</h1>
        <div className="row">
          <div className="col-3">
            <div className="list-group">
                <Link className="list-group-item" to="/about/team" replace>Our team</Link>
                <Link className="list-group-item" to="/about/company" replace>Our company</Link>
            </div>
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
