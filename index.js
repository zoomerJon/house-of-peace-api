const express = require("express");
const app = express();
const posts = require("./posts");

const cors = require("cors");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// app.use(
//   cors({
//     origin: [
//       "https://quiet-malasada-658090.netlify.app",
//       "https://www.aguilascfc.org/2022/11/17/prueba-2/",
//       "https://jovalle0103.wpcomstaging.com",
//     ],
//   })
// );

app.get("/jokes/random", (req, res) => {
  request(
    { url: "https://house-of-peace-api.herokuapp.com/posts" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }

      res.json(posts);
    }
  );
});

// app.get("/posts", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.json(posts);
// });

app.listen(process.env.PORT || 3000, () => console.log("server is running"));
