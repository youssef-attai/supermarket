import React, { Component } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import AboutCompany from "./aboutCompany";
import AboutTeam from "./aboutTeam";

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
            <Outlet />
          </div>
        </div>
      </>
    );
  }
}

export default About;
