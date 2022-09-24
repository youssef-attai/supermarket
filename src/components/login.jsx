import React, { Component } from "react";
import Joi from "joi-browser";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: [],
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  validate() {
    const errors = [];
    const state = { ...this.state };
    delete state.errors;
    const { error } = Joi.validate(state, this.schema, { abortEarly: false });
    if (error) {
      error.details.forEach((err) => {
        errors.push(err.message);
      });
    }
    return errors;
  }

  onSubmitHandler = (e) => {
    e.preventDefault();

    const errors = this.validate();

    if (errors.length > 0) {
      this.setState({ errors: errors });
      return;
    }

    console.log("Submit");
    this.setState({
      username: "",
      password: "",
      errors: [],
    });
  };

  onChangeHandler = (e) => {
    let newState = { ...this.state };
    newState[e.currentTarget.name] = e.currentTarget.value;
    this.setState(newState);
  };

  render() {
    return (
      <>
        <h1 className="m-4 text-center">Login</h1>
        {this.state.errors.map((err) => (
          <div className="alert alert-danger">{err}</div>
        ))}
        <form onSubmit={this.onSubmitHandler} className="d-flex flex-column">
          <div className="mb-3">
            <input
              type="text"
              value={this.state.username}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
              placeholder="Username"
              className="form-control"
              id="username"
              name="username"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => {
                this.onChangeHandler(e);
              }}
              placeholder="Password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Login;
