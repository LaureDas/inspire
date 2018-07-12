const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The content's name is required"],
    enum: ["news", "video", "events"]
  },
  api: {
    method: String,
    urlPattern: String //here is a pattern, so either for api events/news/youtube/TBA,
    //    header: null
  },
  defaultImageUrl: String
});

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;
