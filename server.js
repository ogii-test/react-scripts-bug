const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  console.log("Login request received for user:" + req.username);
  res.send({
    token: "test123",
  });
});

app.listen(8081, () =>
  console.log("API is running on http://localhost:8081/login")
);
