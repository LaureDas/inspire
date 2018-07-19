import React, { Component } from "react";
import FA from "react-fontawesome";
import api from "../api";
import "./VideoCard.css";
//import Shiitake from "shiitake";
//import Iframe from "react-iframe";
import Video from "./Video";

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
      type: this.props.value.type,
      id: this.props.value.id
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

  slice(str) {
    if (str == undefined) {
      return;
    } else {
      //console.log("oldstr", str);
      let newStr = "";

      newStr = str.slice(0, 400);
      // console.log("newstr", newStr);
      return newStr + "...";
    }
  }
  render() {
    //console.log("videoprops", this.props);
    let defaultImg =
      "http://robohub.org/wp-content/uploads/2017/02/grid-AI.jpg";
    // console.log("tryout default", defaultImg);
    // console.log("card", this.cardVideo);
    let id = this.cardVideo.id;
    return (
      <div>
        <Card className="card">
          <CardHeader>
            <Badge className="tag">{this.cardVideo.tag}</Badge>{" "}
            <Badge className="type">{this.cardVideo.type}</Badge>
          </CardHeader>

          <CardBody className="cardBody">
            <Video className="video" value={id} />
            <CardTitle className="body">{this.cardVideo.cardTitle}</CardTitle>

            <CardText className="body" display-4>
              {this.slice(this.cardVideo.cardDescription)}
            </CardText>
            <div className="flex body">
              <Button
                className="btnLearn"
                className="body"
                onClick={() => this.openInNewTab(this.cardVideo.cardUrl)}
              >
                Learn more
              </Button>
              <CardFooter bsSize="small">
                <Button bsSize="medium">
                  <FA
                    name="star"
                    onClick={e => this.handleClick(e, this.cardVideo)}
                  />
                </Button>
              </CardFooter>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default videoCard;
