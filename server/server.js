const emailPassword = require("./hiddenData").password;
const JWT_SECRET = require("./hiddenData").JWT_SECRET;

const express = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("./models/user");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/forum", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/change-email", async (req, res) => {
  const { token, email } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const _id = user.id;

    await User.updateOne(
      { _id },
      {
        email,
      }
    );

    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error" });
  }
});

app.post("/confirm-email", async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    res.json({ status: "error", message: `"${email}" is already in use.` });
  } else {
  }

  let verifyCode = "";

  for (let i = 0; i < 6; i++) {
    verifyCode += Math.floor(Math.random() * 10);
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "belkowski656@gmail.com",
      pass: emailPassword,
    },
  });

  const mailOptions = {
    from: "belkowski656@gmail.com",
    to: email,
    subject: "Confirm Email Change to Forum",
    text: `<h2>Your verification code to change email is ${verifyCode}</h2>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent:" + info.response);
    }
  });

  res.json({ status: "ok", verifyCode });
});

app.post("/change", async (req, res) => {
  const { token, type, value } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const _id = user.id;

    if (type === "name") {
      await User.updateOne(
        { _id },
        {
          name: value,
        }
      );

      res.json({ status: "ok" });
    }

    if (type === "username") {
      await User.updateOne(
        { _id },
        {
          username: value,
        }
      );

      res.json({ status: "ok" });
    }

    if (type === "dateOfBirth") {
      await User.updateOne(
        { _id },
        {
          dateOfBirth: value,
        }
      );

      res.json({ status: "ok" });
    }

    if (type === "gender") {
      await User.updateOne(
        { _id },
        {
          gender: value,
        }
      );

      res.json({ status: "ok" });
    }
  } catch (error) {
    if (error.code === 11000) {
      return res.json({
        status: "duplication",
        error: `${JSON.stringify(error.keyValue)} already in use`,
      });
    }
    throw error;
  }
});

app.post("/fetch-user-data", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);

    const _id = user.id;

    const userData = await User.findOne({ _id }).lean();

    res.json({ status: "ok", data: userData });
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

app.post("/login", async (req, res) => {
  const { login, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ username: login }, { email: login }],
    });

    if (!user) {
      return res.json({
        status: "error",
        error: "Invalid username or password",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { id: user._id, username: user.username },
        JWT_SECRET
      );

      return res.json({ status: "ok", token });
    }

    res.json({ status: "error", error: "Invalid username or password." });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      error: "Something went wrong. Try again later.",
    });
  }
});

app.post("/register", async (req, res) => {
  const { username, email, password: plainTextPassword } = req.body;

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    await User.create({
      username,
      email,
      password,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.json({
        status: "error",
        error: `${JSON.stringify(error.keyValue)} already in use`,
      });
    }
    throw error;
  }
  res.json({ status: "ok" });
});

app.post("/verify-code", async (req, res) => {
  const { username, email } = req.body;

  const user = await User.find({ $or: [{ username }, { email }] });

  if (user.length) {
    if (user[0].username === username && user[0].email === email) {
      return res.json({
        status: "error",
        error: "Username and Email already in use.",
      });
    } else if (user[0].username === username) {
      return res.json({ status: "error", error: "Username already in use." });
    } else {
      return res.json({ status: "error", error: "Email already in use." });
    }
  }

  let verifyCode = "";

  for (let i = 0; i < 6; i++) {
    verifyCode += Math.floor(Math.random() * 10);
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "belkowski656@gmail.com",
      pass: emailPassword,
    },
  });

  const mailOptions = {
    from: "belkowski656@gmail.com",
    to: email,
    subject: "Confirm registrations to Forum",
    text: `<h2>Your verification code is ${verifyCode}</h2>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent:" + info.response);
    }
  });

  res.json({ status: "ok", verifyCode });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
