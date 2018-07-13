import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  NavLink
} from "reactstrap";

class newsCard extends Component {
  isimgDefined() {
    console.log("evaluatepic", this.props.value.urlToImage);
    if (this.props.value.urlToImage == undefined) {
      return false;
    }

    return true;
  }
  render() {
    let cardTitle = this.props.value.title;
    let cardAuthor = this.props.value.author;
    let cardUrl = this.props.value.url;
    let cardDescription = this.props.value.description;
    let imgUrl = this.props.value.urlToImage;
    //console.log("trynig out url", imgUrl);
    let defaultImg =
      "https://www.cbronline.com/wp-content/uploads/2016/06/what-is-URL.jpg";
    //console.log("tryout default", defaultImg);
    return (
      <div>
        <Card>
          {!this.isimgDefined() && (
            <CardImg top width="100%" src={defaultImg} alt="Card image cap" />
          )}
          {this.isimgDefined() && (
            <CardImg top width="100%" src={imgUrl} alt="Card image cap" />
          )}

          <CardBody>
            <CardTitle>{cardTitle}</CardTitle>
            <CardSubtitle>{cardAuthor}</CardSubtitle>
            <CardText>{cardDescription}</CardText>

            <NavLink href={cardUrl}>Link to Article</NavLink>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default newsCard;
