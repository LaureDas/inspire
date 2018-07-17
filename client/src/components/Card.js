import React, { Component } from "react";
import FA from "react-fontawesome";
import api from "../api";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  NavLink,
  Badge
} from "reactstrap";

class newsCard extends Component {
  constructor(props) {
    super(props);
    this.card = {
      cardTitle: this.props.value.title,
      cardAuthor: this.props.value.author,
      cardUrl: this.props.value.url,
      cardDescription: this.props.value.description,
      imgUrl: this.props.value.urlToImage,
      tag: this.props.value.tag
    };
    this.cardTitle = this.props.value.title;
    this.cardAuthor = this.props.value.author;
    this.cardUrl = this.props.value.url;
    this.cardDescription = this.props.value.description;
    this.imgUrl = this.props.value.urlToImage;
    this.tag = this.props.value.tag;
  }

  isimgDefined() {
    // console.log("evaluatepic", this.props.value.urlToImage);
    if (this.props.value.urlToImage == undefined) {
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
    console.log(e, card);
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
    //console.log("tryout default", defaultImg);
    return (
      <div>
        <Card>
          <h500>
            <Badge>{this.tag}</Badge>
          </h500>
          {!this.isimgDefined() && (
            <CardImg
              top
              width="100%"
              src={this.defaultImg}
              alt="Card image cap"
            />
          )}
          {this.isimgDefined() && (
            <CardImg top width="100%" src={this.imgUrl} alt="Card image cap" />
          )}

          <CardBody>
            <CardTitle>{this.cardTitle}</CardTitle>
            <CardText>{this.cardDescription}</CardText>
            {/* <Button bsSize="large"> */}
            <FA name="star" onClick={e => this.handleClick(e, this.card)} />
            {/* </Button> */}

            <Button onClick={() => this.openInNewTab(this.cardUrl)}>
              Learn more
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default newsCard;
