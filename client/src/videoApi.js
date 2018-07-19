import axios from "axios";

const videoApi = axios.create({
  baseURL:
    // "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list"
    "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q="
  //https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=big_data&type=video&videoDefinition=high&
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  videoApi: videoApi,

  getVideos(searchTerm) {
    return videoApi
      .get(
        searchTerm +
          " technology&language=en&type=video&videoDefinition=high&key=AIzaSyBEu_ruW84j3XF_NKE1-_hBqihddnf1VEQ"
      )
      .then(
        response =>
          //console.log("videos +searchthrm", response.data.items);

          //let videoArray = [
          //   {
          //     url: `https://www.youtube.com/embed/${
          //       response.data.items[0].id.channelId
          //     }?autoplay=0`,
          //     description: response.data.items[0].snippet.description,
          //     title: response.data.items[0].snippet.channelTitle
          //   },
          //   {
          //     url: `https://www.youtube.com/embed/${
          //       response.data.items[1].id.channelId
          //     }?autoplay=0`,
          //     description: response.data.items[1].snippet.description,
          //     title: response.data.items[1].snippet.channelTitle
          //   },

          //   {
          //     url: `https://www.youtube.com/embed/${
          //       response.data.items[2].id.channelId
          //     }?autoplay=0`,
          //     description: response.data.items[2].snippet.description,
          //     title: response.data.items[2].snippet.channelTitle
          //   }
          // ];
          //console.log("videoa", videoArray);
          response.data.items
      )
      .catch(errHandler);
  }
};
