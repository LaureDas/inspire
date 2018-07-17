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

class CardFav extends Component {
  constructor(props) {
    super(props);
    this.cardFav = {
      cardTitle: this.props.value.data.title,
      cardUrl: this.props.value.url,
      cardDescription: this.props.value.data.description,
      imgUrl: this.props.value.data.imgUrl,
      tag: this.props.value.categoryName
    };
  }

  isimgDefined() {
    // console.log("evaluatepic", this.cardFav.imgUrl);
    if (this.cardFav.imgUrl == null) {
      return false;
    }

    return true;
  }

  openInNewTab(url) {
    let win = window.open(url, "_blank");
    win.focus();
  }

  render() {
    //console.log("FAVORITE CARD props", this.cardFav);
    let defaultImg =
      "https://www.cbronline.com/wp-content/uploads/2016/06/what-is-URL.jpg";
    // console.log("tryout default", defaultImg);

    return (
      <div>
        <Card>
          <h500>
            <Badge>{this.cardFav.tag}</Badge>
          </h500>
          {!this.isimgDefined() && (
            <CardImg top width="100%" src={defaultImg} alt="Card image cap" />
          )}
          {this.isimgDefined() && (
            <CardImg
              top
              width="100%"
              src={this.cardFav.imgUrl}
              alt="Card image cap"
            />
          )}

          <CardBody>
            <CardTitle>{this.cardFav.cardTitle}</CardTitle>
            <CardText>{this.cardFav.cardDescription}</CardText>

            <Button onClick={() => this.openInNewTab(this.cardFav.cardUrl)}>
              Learn more
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardFav;
