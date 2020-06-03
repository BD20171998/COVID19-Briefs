const express = require("express");
const TwitterAPICall = require("./Twitter/twitterapi");
const YouTubeAPICall = require("./YouTube/youtube");
const http = require("http");

const app = express();

//Testing output on http://localhost:5501/youtube
app.get("/youtube", (req, res) => {
  //See https://stackoverflow.com/questions/47523265/jquery-ajax-no-access-control-allow-origin-header-is-present-on-the-requested
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  YouTubeAPICall.YouTubeAPI(function (response) {
    res.send(JSON.stringify(response));
  });
});

app.listen(5501, () => {
  console.log("Server app now running on port 5501");
});

//Testing output on http://127.0.0.1:3002/twitter
//View tweet format for html: https://twitter.com/screen-name/status/id_str-value
http
  .createServer((req, res) => {
    if (req.url === "/twitter") {
      TwitterAPICall.TwitterAPI(function (response) {
        console.log(JSON.stringify(response));
        res.write(JSON.stringify(response));
        res.end();
      });
    }
  })
  .listen(3002);
