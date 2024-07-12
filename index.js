import express from "express";

const app = express();

const users = {
  name: "aman",
  college: "piet",
  hobby: "fun",
};

app.get("/", function (req, res) {
  res.json(users);
});

app.listen(3000, () => console.log("server started at 3000"));
