const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    content: { type: String, require: true },
    media: [],
    category: { type: String, require: true },
    creatorId: { type: String, require: true },
    creatorUsername: { type: String, require: true },
    creationDate: { type: Date, require: true },
    likes: [],
  },
  { collection: "topics" }
);

const model = mongoose.model("TopicSchema", TopicSchema);

module.exports = model;
