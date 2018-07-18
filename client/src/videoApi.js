import axios from "axios";

const videoApi = axios.create({
  baseURL:
    "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q="
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  videoApi: videoApi,

  getVideos(searchTerm) {
    videoApi
      .get(searchTerm + "&key=AIzaSyB54dfXHWxcG2E-1zijiWtCYGTOOeWYTto")
      .then(response => {
        console.log("videos +searchthrm", response.data.items[0].id.videoId);
        return response.data.items;
        /*let videos = [
          `https://www.youtube.com/embed/${
            response.data.items[0].id.videoId
          }?autoplay=0`,
          `https://www.youtube.com/embed/${
            response.data.items[1].id.videoId
          }?autoplay=0`,
          `https://www.youtube.com/embed/${
            response.data.items[2].id.videoId
          }?autoplay=0`

          
        ];*/
      })
      .catch(errHandler);
  }
};
