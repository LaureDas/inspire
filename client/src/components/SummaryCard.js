import React, { Component } from "react";
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
// import './Sample.css';
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
      cardDescription: this.props.value.summary
    };
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
              {this.cardSummary.cardDescription}
            </CardText>
            {/* <div className="flex body">
               <Button
                className="btnLearn"
                className="body"
                onClick={() => this.openInNewTab(this.cardVideo.cardUrl)}
              > 
              Learn more
              </Button>
            </div>*/}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SummaryCard;
