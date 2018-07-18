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

class videoCard extends Component {
  constructor(props) {
    super(props);
    this.cardVideo = {
      cardTitle: this.props.value.title,
      cardUrl: this.props.value.url,
      cardDescription: this.props.value.description,
      tag: this.props.value.tag,
      type: this.props.value.type
    };
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
    //console.log("videoprops", this.props);
    let defaultImg =
      "https://www.cbronline.com/wp-content/uploads/2016/06/what-is-URL.jpg";
    // console.log("tryout default", defaultImg);
    // console.log("card", this.cardVideo);

    return (
      <div>
        <Card className="card">
          <CardHeader>
            <Badge className="tag">{this.cardVideo.tag}</Badge>{" "}
            <Badge className="type">{this.cardVideo.type}</Badge>
          </CardHeader>

          <CardImg
            className="cardImg"
            top
            width="100%"
            src={defaultImg}
            alt="Card image cap"
          />

          <CardBody className="cardBody">
            <CardTitle className="body">{this.cardVideo.cardTitle}</CardTitle>
            <hr />

            <CardText>{this.cardVideo.cardDescription}</CardText>

            <Button
              className="body"
              onClick={() => this.openInNewTab(this.cardVideo.cardUrl)}
            >
              Learn more
            </Button>
            <CardFooter>
              <Button bsSize="large">
                <FA
                  name="star"
                  onClick={e => this.handleClick(e, this.cardVideo)}
                />
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default videoCard;
