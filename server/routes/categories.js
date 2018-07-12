var express = require("express");
const Category = require("../models/category");

var router = express.Router();

// Route to get all countries
router.get("/", (req, res, next) => {
  Category.find()
    .then(categories => {
      res.json(categories);
    })
    .catch(err => next(err));
});

module.exports = router;
