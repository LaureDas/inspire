const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The category name is required"]
    /*    enum: [
      "Artificial Intelligence",
      "Business Intelligence",
      "Machine Learning",
      "Big Data",
      "Social Challenges"
    ]*/
  },
  summary: String
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
