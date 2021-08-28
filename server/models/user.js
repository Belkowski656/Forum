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
        "https://ams02pap001files.storage.live.com/y4mQki-m9Ujme2fDdqOmgA3kAZwhPWg0CMiyguAQnKuY8YF_wFNoyOKL4rDveAhSrdZJ4PqeKjWEtkYPf0L_n3dW5H7ra5aip3WHkhWLU_hALTWPO3S0lb8zXKnhqHXUjTTbrS8ZcJk5uXmPw_mxKLhAZe6xXVXNqXj1Vo9tYjx4ZF6nlaI0X8P7wMu9mAntSBK?width=401&height=721&cropmode=none",
    },
  },
  { collection: "users" }
);

const model = mongoose.model("UserSchema", UserSchema);

module.exports = model;
