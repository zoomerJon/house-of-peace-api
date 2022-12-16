const express = require("express");
const app = express();
const posts = require("./posts");

const cors = require("cors");
app.use(
  cors({
    origin: ["*"],
  })
);

app.get("/posts", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(posts);
});

app.listen(process.env.PORT || 3000, () => console.log("server is running"));
