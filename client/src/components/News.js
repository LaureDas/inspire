import React, { Component } from "react";
import newsApi from "../newsApi";
import videoApi from "../videoApi";
import jobsApi from "../jobsApi";
import VideoCard from "./VideoCard";
import SummaryCard from "./SummaryCard";

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
      type: ["Definitions", "Video", "News", "Jobs"],
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
                  [tag]: false
                },
                typeSelected: {
                  ...this.state.typeSelected,
                  [type]: true
                }
              });
            })
            .catch(err => console.log(err));
        }

        for (let i = 0; i < this.state.categories.length; i++) {
          const tag = this.state.categories[i].name;
          const type = "Video";
          //console.log(tag);
          //console.log("checkcate", this.state.categories[i].name);
          videoApi
            .getVideos(tag)
            .then(videos => {
              // console.log("videosfirstcall", videos);
              this.setState({
                videos: [
                  ...this.state.videos,
                  ...videos.map(video => ({
                    id: video.id.videoId,
                    url:
                      "https://www.youtube.com/embed/" +
                      video.id.videoId +
                      "/autoplay=0",
                    description: video.snippet.description,
                    title: video.snippet.channelTitle,
                    tag: tag,
                    type: "Video"
                  }))
                ],
                typeSelected: {
                  ...this.state.typeSelected,
                  [type]: false
                }
              });
            })
            .catch(err => console.log(err));
        }
        /*
        for (let i = 0; i < this.state.types.length; i++) {
          const tag = this.state.categories[i].name;
          const type = "Jobs";
          jobsApi.getJobs(tag).then(jobs => {
            console.log("jobs gotten", jobs);
          });
        }*/
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
    console.log("click", type);
    e.preventDefault();
    this.setState({
      typeSelected: {
        ...this.state.typeSelected,
        [type]: !this.state.typeSelected[type]
      }
    });
  }

  render() {
    //console.log("this.state.videos.", this.state.videos);
    //console.log("type", this.state.typeSelected);
    //console.log("news", this.state.news);
    //console.log("typcatee", this.state.categories);

    return (
      <div className="box">
        <div className="categories">
          <Jumbotron>
            <h3>Categories</h3>
            <p className="lead">
              {this.state.categories.map(category => (
                <Button
                  className="btn-category"
                  size="sm"
                  outline={!this.state.tagsSelected[category.name]}
                  onClick={e => this.handleClick(e, category.name)}
                  key={category.name}
                >
                  {category.name}
                </Button>
              ))}{" "}
            </p>
            <hr className="my-2" />
            <h4>Types</h4>
            {this.state.type.map(type => (
              <Button
                size="sm"
                outline={!this.state.typeSelected[type]}
                onClick={e => this.handleTypeClick(e, type)}
                key={type}
              >
                {type}
              </Button>
            ))}
          </Jumbotron>
        </div>

        <div className="content">
          <Container>
            <Row>
              {this.state.news
                .filter(
                  article =>
                    this.state.tagsSelected[article.tag] &&
                    this.state.typeSelected[article.type]
                )
                .map(newsCard => (
                  <Col col-sm-3>
                    <Card key={newsCard.id} value={newsCard} />
                  </Col>
                ))}
            </Row>
          </Container>
          <Container>
            <Row>
              {this.state.videos
                .filter(
                  video =>
                    this.state.tagsSelected[video.tag] &&
                    this.state.typeSelected[video.type]
                )
                .map(videoCard => (
                  <Col col-sm-3>
                    <VideoCard key={videoCard.id} value={videoCard} />
                  </Col>
                ))}
            </Row>
          </Container>

          <Container>
            <Row>
              {this.state.categories
                .filter(
                  category =>
                    this.state.tagsSelected[category.name] &&
                    this.state.typeSelected["Definitions"]
                )
                .map(categoryCard => (
                  <Col col-sm-3>
                    <SummaryCard value={categoryCard} />
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default News;
