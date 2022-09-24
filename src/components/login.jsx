import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
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
        <form onSubmit={this.onSubmitHandler}>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Login;
