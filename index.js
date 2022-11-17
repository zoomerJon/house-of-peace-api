const express = require("express");
const app = express();
const posts = require("./posts");

const cors = require("cors");
app.use(
  cors({
    origin: [
      "http://www.aguilascfc.org/",
      "https://quiet-malasada-658090.netlify.app",
      "https://jovalle0103.wpcomstaging.com",
    ],
  })
);

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(process.env.PORT || 3000, () => console.log("server is running"));
