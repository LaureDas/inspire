import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3030/api"
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service,
  //service news api
  getCategories() {
    return service
      .get("/categories")
      .then(res => res.data)
      .catch(errHandler);
  },

  getSecret() {
    return service
      .get("/secret")
      .then(res => res.data)
      .catch(errHandler);
  },

  getMyFav() {
    return service
      .get("users/favourite")
      .then(res => {
        return res.data;
      })
      .catch(errHandler);
  },
  getFav(card) {
    return service
      .post("/users/add-favourite", card)
      .then(res => {
        console.log("card in here", card);
        res.data;
        console.log("resdata fav", res.data);
      })
      .catch(errHandler);
  },

  signup(userInfo) {
    return service
      .post("/signup", userInfo)
      .then(res => res.data)
      .catch(errHandler);
  },

  login(email, password) {
    return service
      .post("/login", {
        email,
        password
      })
      .then(res => {
        const { data } = res;
        localStorage.setItem("user", JSON.stringify(data));
        axios.defaults.headers.common["Authorization"] = "Bearer " + data.token;
        return data;
      })
      .catch(errHandler);
  },

  logout() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("user");
  },

  loadUser() {
    const userData = localStorage.getItem("user");
    if (!userData) return false;
    const user = JSON.parse(userData);
    if (user.token && user.name) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
      return user;
    }
    return false;
  },

  isLoggedIn() {
    return localStorage.getItem("user") != null;
  },

  addPicture(file) {
    const formData = new FormData();
    formData.append("picture", file);
    return service
      .post("/users/first-user/pictures", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.data)
      .catch(errHandler);
  }
};
