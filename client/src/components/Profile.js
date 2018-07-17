import React, { Component } from "react";
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
import api from "../api";
import { Container, Row, Col, Button } from "reactstrap";
import CardFav from "./CardFav";
// import './Sample.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      categories: [],
      tagsSelected: []
    };
  }

  componentDidMount() {
    api
      .getMyFav()
      .then(favourites => {
        this.setState({
          categories: [
            ...favourites.map(favourite => {
              return favourite.categoryName;
            })
          ]
        });
        const newCategories = this.state.categories.filter(function(
          item,
          pos,
          o
        ) {
          return o.indexOf(item) == pos;
        });
        console.log("favorites ", newCategories);

        this.setState({
          favourites: [...this.state.favourites, ...favourites],
          categories: newCategories
        });
        for (let i = 0; i < this.state.categories.length; i++) {
          const tag = this.state.categories[i];
          this.setState({
            tagsSelected: {
              ...this.state.tagsSelected,
              [tag]: true
            }
          });
        }
      })
      .catch(err => console.log(err));
  }

  handleClick(e, categoryName) {
    e.preventDefault();
    //console.log("clickkk", category); YES gets me the category
    this.setState({
      tagsSelected: {
        ...this.state.tagsSelected,
        [categoryName]: !this.state.tagsSelected[categoryName]
      }
    });
  }
  render() {
    // console.log("my favourites array", this.state.favourites);
    // console.log("myfavourites categories", this.state.categories);
    console.log("myfavourites TAGS", this.state.tagsSelected);

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Your personal Likes</h1>
          {this.state.categories.map((category, i) => (
            <Button
              outline={!this.state.tagsSelected[category]}
              onClick={e => this.handleClick(e, category)}
              key={i}
            >
              {category}
            </Button>
          ))}
        </header>
        <Container>
          <Row>
            {this.state.favourites
              .filter(article => this.state.tagsSelected[article.categoryName])
              .map(newsCard => (
                <Col xs="3" sm="4">
                  <CardFav key={newsCard.id} value={newsCard} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
