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
      default:
        "https://ams02pap001files.storage.live.com/y4mRdpu_Ugh1hSOtdlEe3uzsOgeIbpaQLdbpEMpOym3F7ec6iNN1Je454zJei9gXrbA-Bh68hw31thcXzd-YV3xALMBYeN72LCrK9-HuFjgC413u_9OziqHtiLmNlclg4lOhGbPnRAeqV6LlZgJHZRcj8evXLjVJ_Xl7EsFjOxdEKBkwyo2v7VdtcJcoj1iYt5J?width=512&height=512&cropmode=none",
    },
    name: { type: String, require: true, default: "Unknown" },
    dateOfBirth: { type: String, require: true, default: "Unknown" },
    gender: { type: String, require: true, default: "Unknown" },
  },
  { collection: "users" }
);

const model = mongoose.model("UserSchema", UserSchema);

module.exports = model;
