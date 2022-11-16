const express = require("express");
const app = express();
const posts = require("./posts");

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(process.env.PORT || 3000, () => console.log("server is running"));
