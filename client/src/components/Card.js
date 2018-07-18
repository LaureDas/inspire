import React, { Component } from "react";
import FA from "react-fontawesome";
import api from "../api";
import "./Card.css";
import Shiitake from "shiitake";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  NavLink,
  Badge,
  CardHeader,
  CardFooter
} from "reactstrap";

class newsCard extends Component {
  constructor(props) {
    super(props);
    this.cardNews = {
      cardTitle: this.props.value.title,
      cardAuthor: this.props.value.author,
      cardUrl: this.props.value.url,
      cardDescription: this.props.value.description,
      imgUrl: this.props.value.urlToImage,
      tag: this.props.value.tag,
      type: this.props.value.type
    };
  }

  isimgDefined() {
    // console.log("evaluatepic", this.cardNews.imgUrl);
    if (this.cardNews.imgUrl == null) {
      return false;
    }

    return true;
  }

  openInNewTab(url) {
    let win = window.open(url, "_blank");
    win.focus();
  }

  handleClick(e, card) {
    e.preventDefault();

    api
      .getFav(card)
      .then(result => {
        console.log("SUCCESS!");
      })
      .catch(err => {
        console.log("ERROR");
      });
  }

  render() {
    let defaultImg =
      "https://www.cbronline.com/wp-content/uploads/2016/06/what-is-URL.jpg";
    // console.log("tryout default", defaultImg);
    // console.log("card", this.cardNews);

    return (
      <div>
        <Card className="card">
          <CardHeader>
            <Badge className="tag">{this.cardNews.tag}</Badge>{" "}
            <Badge className="type">{this.cardNews.type}</Badge>
          </CardHeader>

          {!this.isimgDefined() && (
            <CardImg
              className="cardImg"
              top
              width="100%"
              src={defaultImg}
              alt="Card image cap"
            />
          )}
          {this.isimgDefined() && (
            <CardImg
              className="cardImg"
              top
              width="100%"
              src={this.cardNews.imgUrl}
              alt="Card image cap"
            />
          )}

          <CardBody className="cardBody">
            <CardTitle className="body">{this.cardNews.cardTitle}</CardTitle>
            <hr />
            <CardText className="body">
              <Shiitake lines={3} throttleRate={200} className="body">
                {this.cardNews.cardDescription}
              </Shiitake>
            </CardText>

            <Button
              className="body"
              onClick={() => this.openInNewTab(this.cardNews.cardUrl)}
            >
              Learn more
            </Button>
            <CardFooter>
              <Button bsSize="large">
                <FA
                  name="star"
                  onClick={e => this.handleClick(e, this.cardNews)}
                />
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default newsCard;
