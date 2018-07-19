var express = require("express");
const Category = require("../models/category");
const axios = require("axios");
var router = express.Router();

// Route to get all countries
router.get("/", (req, res, next) => {
  Category.find()
    .then(categories => {
      res.json(categories);
    })
    .catch(err => next(err));
});

router.post("/", (req, res, next) => {
  let { name, summary } = req.body;
  Category.create({ name, summary })
    .then(category => {
      res.json({
        success: true,
        category
      });
    })
    .catch(err => next(err));

  /*let tag = req.body.tag;
  console.log("tag", tag);
  const jobsApi = axios.create({
    baseUrl: "https://jobs.github.com/positions.json?description="
  });

  jobsApi
    .get(tag)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });*/
});

module.exports = router;
