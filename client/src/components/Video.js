import React from "react";
import YouTube from "react-youtube";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.videoUrl = this.props.value;
  }
  render() {
    //console.log("url", this.props.value);
    const opts = {
      height: "100%",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return <YouTube videoId={this.videoUrl} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Video;
