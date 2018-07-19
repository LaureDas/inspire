import React, { Component } from "react";
import api from "../api";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange(stateFieldName, event) {
    let newState = {};
    newState[stateFieldName] = event.target.value;
    this.setState(newState);
  }

  handleClick(e) {
    e.preventDefault();
    api
      .login(this.state.email, this.state.password)
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/"); // Redirect to the home page
      })
      .catch(err => {
        console.log("ERROR");
      });
  }

  render() {
    return (
      <div className="Login">
        <h2 className="pt-5">Login</h2>
        <form>
          Email:{" "}
          <input
            className="form-control mx-auto"
            type="text"
            value={this.state.email}
            onChange={e => {
              this.handleInputChange("email", e);
            }}
          />{" "}
          <br />
          Password:{" "}
          <input
            className="form-control mx-auto"
            type="password"
            value={this.state.password}
            onChange={e => {
              this.handleInputChange("password", e);
            }}
          />{" "}
          <br />
          <button className="btn-primary" onClick={e => this.handleClick(e)}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
