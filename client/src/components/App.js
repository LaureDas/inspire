import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import News from "./News";
import Countries from "./Countries";
import AddCountry from "./AddCountry";
import Secret from "./Secret";
import Login from "./Login";
import Signup from "./Signup";
import api from "../api";
import logo from "../logo.svg";
import "./App.css";
import Header from "./Header";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <h1 className="App-title">Welcome to your Learning Platform</h1>
          <Link to="/">Home</Link>
          <Link to="/countries">Countries</Link>
          <Link to="/add-country">Add country</Link>
        </header>
        <Switch>
          <Route path="/" exact component={News} />
          <Route path="/countries" component={Countries} />
          <Route path="/add-country" component={AddCountry} />
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
