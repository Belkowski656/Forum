const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    dateOfCreation: { type: Date, require: true, default: new Date() },
    avatar: {
      type: String,
      require: true,
      default: "default.png",
    },
    name: { type: String, require: true, default: "Unknown" },
    dateOfBirth: { type: String, require: true, default: "Unknown" },
    gender: { type: String, require: true, default: "Unknown" },
  },
  { collection: "users" }
);

const model = mongoose.model("UserSchema", UserSchema);

module.exports = model;
