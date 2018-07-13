import React, { Component } from "react";
import newsApi from "../newsApi";
import { Container, Row, Col } from "reactstrap";
import Card from "./Card";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }
  componentDidMount() {
    newsApi
      .getNewsBigData()
      .then(bigdata => {
        this.setState({
          news: bigdata
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.news.map(newsCard => (
            <Col xs="3" sm="4">
              <Card key={newsCard.id} value={newsCard} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default News;
