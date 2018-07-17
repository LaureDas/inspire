import axios from "axios";

const service = axios.create({
  baseURL: "https://newsapi.org/v2/everything?q="
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service,

  getVideos(searchTerm) {
    return service
      .get(
        searchTerm +
          "&language=en&apiKey=AIzaSyB54dfXHWxcG2E-1zijiWtCYGTOOeWYTto"
      )
      .then(res => res.data.articles)
      .catch(errHandler);
  }
};
