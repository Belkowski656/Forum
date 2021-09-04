const emailPassword = require("./hiddenData").password;
const JWT_SECRET = require("./hiddenData").JWT_SECRET;

const express = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const uuid = require("uuid").v4;

const User = require("./models/user");
const Topic = require("./models/topic");
const Reply = require("./models/reply");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/forum", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/add-topic", async (req, res) => {
  const { token, category, title, content } = req.body;

  const user = jwt.verify(token, JWT_SECRET);
  const _id = user.id;
  const username = user.username;

  const date = new Date();

  const topic = await Topic.create({
    title,
    content,
    category,
    creatorId: _id,
    creatorUsername: username,
    creationDate: date,
  });

  res.json({ status: "ok", topicId: topic._id });
});

app.post("/fetch-topics", async (req, res) => {
  const { category } = req.body;

  const topics = await Topic.find({ category });

  res.json({ status: "ok", topics });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/resources/images/avatars");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    const fileName = `${uuid()}_${originalname}`;

    cb(null, fileName);
  },
});

const upload = multer({ storage });

app.post("/change-avatar", upload.single("avatar"), async (req, res) => {
  const image = req.file.filename;
  const token = req.body.token;

  console.log(token);

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const _id = user.id;

    await User.updateOne(
      { _id },
      {
        avatar: image,
      }
    );
    res.redirect("/profile/edit");
  } catch (error) {
    res.end({ status: "error", error: error });
  }
});

app.post("/change-password", async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const _id = user.id;

    const password = await bcrypt.hash(newPassword, 10);

    await User.updateOne(
      { _id },
      {
        password,
      }
    );

    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error" });
  }
});

app.post("/confirm-password", async (req, res) => {
  const { token, currentPassword, newPassword } = req.body;

  const user = jwt.verify(token, JWT_SECRET);
  const _id = user.id;

  const userData = await User.findOne({ _id });

  if (!(await bcrypt.compare(currentPassword, userData.password))) {
    return res.json({ status: "error", message: "Invalid password" });
  }

  if (await bcrypt.compare(newPassword, userData.password)) {
    return res.json({
      status: "error",
      message: "Your new password is the same as the previous one",
    });
  }

  const email = userData.email;

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
    subject: "Confirm Password Change to Forum",
    text: `<h2>Your verification code to change password is ${verifyCode}</h2>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent:" + info.response);
    }
  });

  res.json({ status: "ok", verifyCode, newPassword });
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
