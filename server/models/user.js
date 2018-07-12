const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String, // Defined with passportLocalMongoose
  hashed: String, // Defined with passportLocalMongoose
  salt: String, // Defined with passportLocalMongoose
  name: { type: String, required: [true, "A name is required"] },
  pictureUrl: String,
  favorites: [
    {
      categoryName: {
        type: String,
        required: [true, "A type is required"],
        enum: [
          "Artificial Intelligence",
          "Business Intelligence",
          "Machine Learning",
          "Big Data",
          "Social Challenges"
        ]
      },
      contentName: {
        type: String,
        required: [true, "A type is required"],
        enum: ["news", "video", "events"]
      },
      data: {
        id: { type: String, required: [true, "An id is required"] },
        title: String,
        description: String,
        imgUrl: String
      }
    }
  ]
});

// Add "email" (instead of "username"), "hash" and "salt" field to store the email (as username), the hashed password and the salt value
// Documentation: https://github.com/saintedlama/passport-local-mongoose
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);
