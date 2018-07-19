import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import News from "./News";

import Secret from "./Secret";
import Login from "./Login";
import Signup from "./Signup";
import api from "../api";
import logo from "../logo.svg";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Profile from "./Profile";
import {
  Collapse,
  Navbar,
  Button,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={News} />

          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route path="/about" component={About} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;
