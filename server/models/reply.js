const mongoose = require("mongoose");

const ReplySchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    content: { type: String, require: true },
    media: [],
    category: { type: String, require: true },
    creatorId: { type: String, require: true },
    creatorUsername: { type: String, require: true },
    creationDate: { type: Date, require: true },
    likes: [],
    replyTo: { type: String, require: true },
    answerTo: { type: String, required: true },
  },
  { collection: "replies" }
);

const model = mongoose.model("ReplySchema", ReplySchema);

module.exports = model;
