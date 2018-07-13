import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api"
      : "https://newsapi.org/v2/everything?q="
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service,

  getNewsBigData() {
    return service
      .get("/big data&en&apiKey=364b0c6a89c74ab5bb5081752d4e1095")
      .then(res => res.data.articles)
      .catch(errHandler);
  },

  getNewsBI() {
    return service
      .get("/business intelligence&en&apiKey=364b0c6a89c74ab5bb5081752d4e1095")
      .then(res => {
        res.data;
        console.log("resdataBI", res.data);
      })
      .catch(errHandler);
  },

  getNewsBI() {
    return service
      .get(
        "/artificial intelligence&en&apiKey=364b0c6a89c74ab5bb5081752d4e1095"
      )
      .then(res => {
        res.data;
        console.log("resdataAI", res.data);
      })
      .catch(errHandler);
  },
  getNewsBI() {
    return service
      .get("/machine learning&en&apiKey=364b0c6a89c74ab5bb5081752d4e1095")
      .then(res => {
        res.data;
        console.log("resdataML", res.data);
      })
      .catch(errHandler);
  }
};
