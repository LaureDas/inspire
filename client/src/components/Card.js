import React, { Component } from "react";
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

  render() {
    let cardTitle = this.props.value.title;
    let cardAuthor = this.props.value.author;
    let cardUrl = this.props.value.url;
    let cardDescription = this.props.value.description;
    let imgUrl = this.props.value.urlToImage;
    let tag = this.props.value.tag;

    let defaultImg =
      "https://www.cbronline.com/wp-content/uploads/2016/06/what-is-URL.jpg";
    //console.log("tryout default", defaultImg);
    return (
      <div>
        <Card>
          <h500>
            <Badge>{tag}</Badge>
          </h500>
          {!this.isimgDefined() && (
            <CardImg top width="100%" src={defaultImg} alt="Card image cap" />
          )}
          {this.isimgDefined() && (
            <CardImg top width="100%" src={imgUrl} alt="Card image cap" />
          )}

          <CardBody>
            <CardTitle>{cardTitle}</CardTitle>
            <CardText>{cardDescription}</CardText>

            <Button onClick={() => this.openInNewTab(cardUrl)}>
              Learn more
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default newsCard;
