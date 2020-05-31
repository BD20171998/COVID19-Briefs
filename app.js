const express = require("express");
const TwitterAPICall = require("./Twitter/twitterapi");
const http = require("http");
const app = express();

app
  .get("/youtube", (req, res) => {
    res.send("Youtube video page");
  })
  .listen(3000);

app
  .get("/newsapi", (req, res) => {
    res.send("News API page");
  })
  .listen(3001);

//Testing output on http://127.0.0.1:3002/twitter
//https://twitter.com/screen-name/status/id_str-value
//https://stackoverflow.com/questions/41090108/how-to-embed-a-tweet-on-a-page-if-i-only-know-its-id
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
