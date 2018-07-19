import React, { Component } from "react";
import api from "../api";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
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
    let data = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password
    };
    api
      .signup(data)
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/login"); // Redirect to the login page
      })
      .catch(err => {
        console.log("ERROR");
      });
  }

  render() {
    return (
      <div className="Signup">
        <h1>Signup Here</h1>
        <form>
          Please, enter your email:{" "}
          <input
            className="form-control mx-auto"
            type="text"
            value={this.state.email}
            onChange={e => {
              this.handleInputChange("email", e);
            }}
          />{" "}
          <br />
          Please, enter your name:{" "}
          <input
            className="form-control mx-auto"
            type="text"
            value={this.state.name}
            onChange={e => {
              this.handleInputChange("name", e);
            }}
          />{" "}
          <br />
          Please enter a password:{" "}
          <input
            className="form-control mx-auto"
            type="password"
            value={this.state.password}
            onChange={e => {
              this.handleInputChange("password", e);
            }}
          />{" "}
          <br />
          <button onClick={e => this.handleClick(e)}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;
