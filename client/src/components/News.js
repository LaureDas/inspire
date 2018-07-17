import React, { Component } from "react";
import newsApi from "../newsApi";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Card from "./Card";
//import categories from "../categories";
import api from "../api";

class News extends Component {
  constructor(props) {
    super(props);
    /* TODO: change tagsSelected based on categories */

    this.state = {
      news: [],
      tagsSelected: {},
      categories: []
    };
  }

  componentDidMount() {
    api
      .getCategories()
      .then(categories => {
        this.setState({
          categories: categories
        });
        for (let i = 0; i < categories.length; i++) {
          const tag = categories[i].name;
          newsApi
            .getNews(tag)
            .then(articles => {
              this.setState({
                news: [
                  ...this.state.news,
                  ...articles.map(article => ({
                    ...article,
                    tag: tag
                  }))
                ],
                tagsSelected: {
                  ...this.state.tagsSelected,
                  [tag]: true
                }
              });
            })
            .catch(err => console.log(err));
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
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to your Learning Platform</h1>
          {this.state.categories.map(category => (
            <Button
              outline={!this.state.tagsSelected[category.name]}
              onClick={e => this.handleClick(e, category.name)}
              key={category.name}
            >
              {category.name}
            </Button>
          ))}
        </header>
        <Container>
          <Row>
            {this.state.news
              .filter(article => this.state.tagsSelected[article.tag])
              .map(newsCard => (
                <Col xs="3">
                  <Card key={newsCard.id} value={newsCard} />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default News;
