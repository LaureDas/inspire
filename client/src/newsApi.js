import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api"
      : "https://newsapi.org/v2/everything?q=%CATEGORY%&apiKey=364b0c6a89c74ab5bb5081752d4e1095"
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service
};
