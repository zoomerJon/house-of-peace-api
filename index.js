const express = require("express");
const app = express();
const posts = require("./posts");

const cors = require("cors");
app.use(
  cors({
    origin: [
      "https://quiet-malasada-658090.netlify.app",
      "https://www.aguilascfc.org/2022/11/17/prueba-2/",
      "https://jovalle0103.wpcomstaging.com",
    ],
  })
);

app.get("/posts", (req, res) => {
  res.set("Access-Control-Allow-Origin", [
    "https://quiet-malasada-658090.netlify.app",
    "https://www.aguilascfc.org",
  ]);
  res.json(posts);
});

app.listen(process.env.PORT || 3000, () => console.log("server is running"));
