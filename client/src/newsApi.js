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

  getNews(searchTerm) {
    return service
      .get(searchTerm + "&language=en&apiKey=364b0c6a89c74ab5bb5081752d4e1095")
      .then(res => res.data.articles)
      .catch(errHandler);
  },

  getNewsBigData() {
    return service
      .get("/big data&language=en&apiKey=364b0c6a89c74ab5bb5081752d4e1095")
      .then(res => res.data.articles)
      .catch(errHandler);
  },

  getNewsBI() {
    return service
      .get(
        "/business intelligence&language=en&apiKey=364b0c6a89c74ab5bb5081752d4e1095"
      )
      .then(res => {
        res.data;
        console.log("resdataBI", res.data);
        return res.data.articles;
      })
      .catch(errHandler);
  },

  getNewsAI() {
    return service
      .get(
        "/artificial intelligence&language=en&apiKey=364b0c6a89c74ab5bb5081752d4e1095"
      )
      .then(res => {
        res.data.articles;
        console.log("resdataAI", res.data.articles);
      })
      .catch(errHandler);
  },
  getNewsML() {
    return service
      .get(
        "/machine learning&language=en&apiKey=364b0c6a89c74ab5bb5081752d4e1095"
      )
      .then(res => {
        res.data.articles;
        console.log("resdataML", res.data);
      })
      .catch(errHandler);
  }
};
