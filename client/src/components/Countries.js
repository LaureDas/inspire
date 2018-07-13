import React, { Component } from "react";
import api from "../api";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }
  componentDidMount() {
    api
      .getCountries()
      .then(countries => {
        this.setState({
          countries: countries
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="Countries">
        <h2>List of news</h2>
        {this.state.news.map((c, i) => <li key={i}>{c.name}</li>)}
      </div>
    );
  }
}

export default Countries;
