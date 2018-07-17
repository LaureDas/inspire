const mongoose = require("mongoose");
const Category = require("../models/category.js");
const Content = require("../models/content.js");
const dataCategories = require("../data/categories.json");
const dataContents = require("../data/content.json");

mongoose.connect(
  "mongodb://heroku_5rsjh9ht:bpluafmd24kgeo35dep90pcrt2@ds141221.mlab.com:41221/heroku_5rsjh9ht",
  { useMongoClient: true }
);

Category.remove({}, function(err) {
  if (err) {
    throw err;
  }
  console.log("All categories removed");

  Content.remove({}, function(err) {
    if (err) {
      throw err;
    }
    console.log("All content removed");

    Category.create(dataCategories, (err, categories) => {
      if (err) {
        throw err;
      }
      categories.forEach(category => {
        console.log("New category:", category.name);
      });

      Content.create(dataContents, (err, contents) => {
        if (err) {
          throw err;
        }
        contents.forEach(content => {
          console.log("new content", content.name);
        });
        mongoose.connection.close();
      });
    });
  });
});
