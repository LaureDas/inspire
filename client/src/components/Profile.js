import React, { Component } from "react";
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
import api from "../api";
import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  Card,
  CardBody
} from "reactstrap";
import CardFav from "./CardFav";
// import './Sample.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      categories: [],
      tagsSelected: []

      //collapse: false,
      //newCategory: { name: " " }
    };
    //this.toggle = this.toggle.bind(this);
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
  /*
  toggle() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  handleInputChange(event) {
    event.preventDefault();
    let newCategory = this.state.newCategory;
    newCategory[event.target.name] = event.target.value;
    this.setState(...this.state, newCategory);
    console.log("newcategory", this.state.newCategory);
  }
  
state= {collapse: false, albums [], mewAlbm: {title}}
  handleAddClick(e) {
    e.preventDefault();
    let { newCategory } = this.state.newCategory;
    api.postCategory(newCategory).then(result => {
      console.log("SUCCESS!", result);
      this.setState({
        newCategory: { title: "" },
        message: `Your new category '${this.state.name}' has been created`,
        category: [result.category, ...this.state.categories]
      });
    });
  }*/

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
          {/* <Button onClick={this.toggle}>
            +
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                  <form>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      value={this.state.newCategory.name}
                      onChange={e => {
                        this.handleInputChange(e);
                      }}
                    />{" "}
                    <br />
                    <Button onClick={e => this.handleAddClick(e)}>
                      Add Category
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Collapse>
          </Button> */}
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
