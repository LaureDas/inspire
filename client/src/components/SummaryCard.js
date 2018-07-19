import React, { Component } from "react";
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
import "./SummaryCard.css";
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

class SummaryCard extends Component {
  constructor(props) {
    super(props);
    this.cardSummary = {
      cardTitle: this.props.value.name,
      cardDescription: this.props.value.summary,
      cardUrl: this.props.value.url
    };
  }
  openInNewTab(url) {
    let win = window.open(url, "_blank");
    win.focus();
  }

  slice(str) {
    if (str == undefined) {
      return;
    } else {
      //console.log("oldstr", str);
      let newStr = "";

      newStr = str.slice(0, 300);
      // console.log("newstr", newStr);
      return newStr + "...";
    }
  }

  render() {
    console.log("props received", this.props);
    let defaultImg =
      "http://robohub.org/wp-content/uploads/2017/02/grid-AI.jpg";
    return (
      <div>
        <Card className="card">
          <CardBody className="cardBody">
            <CardImg
              className="img-responsive"
              className="img-rounded"
              className="cardImg"
              top
              width="80%"
              src={defaultImg}
              alt="Card image cap"
            />
            <CardTitle className="body">{this.cardSummary.cardTitle}</CardTitle>

            <CardText className="body" display-4>
              {this.slice(this.cardSummary.cardDescription)}
            </CardText>

            <Button
              className="btnLearn"
              className="body"
              onClick={() => this.openInNewTab(this.cardSummary.cardUrl)}
            >
              Learn more
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SummaryCard;
