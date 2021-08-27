const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// app.post("/fetch-verify-code", (req, res) => {
//   console.log(req.body);

//   let verifyCode = "";

//   for (let i = 0; i < 5; i++) {
//     verifyCode += Math.floor(Math.random() * 10);
//   }

//   res.json(verifyCode);
// });

app.post("/test", (req, res) => {
  console.log(req.body);
  res.json("test");
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
