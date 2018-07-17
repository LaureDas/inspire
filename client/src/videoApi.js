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
      .get(searchTerm + "&language=en&apiKey=364b0c6a89c74ab5bb5081752d4e1095")
      .then(res => res.data.articles)
      .catch(errHandler);
  }
};
