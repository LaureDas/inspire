import React, { Component } from "react";
import newsApi from "../newsApi";
import videoApi from "../videoApi";

import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Jumbotron
} from "reactstrap";
import Card from "./Card";
import "./Container.css";
//import categories from "../categories";
import api from "../api";

class News extends Component {
  constructor(props) {
    super(props);
    /* TODO: change tagsSelected based on categories */

    this.state = {
      news: [],
      tagsSelected: {},
      categories: [],
      videos: [],
      type: ["Video", "News", "Jobs", "Events"],
      typeSelected: {}
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
          // console.log("tag", tag);
          const type = "News";
          newsApi
            .getNews(tag)
            .then(articles => {
              this.setState({
                news: [
                  ...this.state.news,
                  ...articles.map(article => ({
                    ...article,
                    tag: tag,
                    type: type
                  }))
                ],
                tagsSelected: {
                  ...this.state.tagsSelected,
                  [tag]: true
                },
                typeSelected: {
                  ...this.state.typeSelected,
                  [type]: true
                }
              });
            })
            .catch(err => console.log(err));
        }
        for (let i = 0; i < categories.length; i++) {
          const tag = categories[i].name;
          videoApi.getVideos(tag).then(videos => {
            this.setState({
              videos: [
                ...this.state.videos,
                ...videos.map(video => ({
                  ...video,
                  tag: tag,
                  type: "Video"
                }))
              ]
            });
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
  handleTypeClick(e, type) {
    e.preventDefault();
    this.setState({
      typeSelected: {
        ...this.state.typeSelected,
        [type]: !this.state.typeSelected[type]
      }
    });
  }

  render() {
    console.log("this.state.videos.", this.statevideos);
    //console.log("type", this.state.typeSelected);
    //console.log("news", this.state.news);

    return (
      <div className="box">
        <div className="jumboClass">
          <Jumbotron>
            <h6 className="display-12">Welcome to your learning platform!</h6>
            <p className="lead">
              {this.state.categories.map(category => (
                <Button
                  outline={!this.state.tagsSelected[category.name]}
                  onClick={e => this.handleClick(e, category.name)}
                  key={category.name}
                >
                  {category.name}
                </Button>
              ))}{" "}
            </p>
            <hr className="my-2" />
            {this.state.type.map(type => (
              <Button
                outline={!this.state.typeSelected[type]}
                onClick={e => this.handleTypeClick(e, type)}
                key={type}
              >
                {type}
              </Button>
            ))}
          </Jumbotron>
        </div>

        <Container>
          <Row>
            {this.state.news
              .filter(article => this.state.tagsSelected[article.tag])
              .map(newsCard => (
                <Col sm="3">
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
