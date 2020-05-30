const express = require("express");
const TwitterAPICall = require("./twitterapi_v2");
const http = require("http");
const app = express();

app
  .get("/Christine", (req, res) => {
    res.send("Christines's page");
  })
  .listen(3000);

app
  .get("/kevin", (req, res) => {
    res.send("Kevin's page");
  })
  .listen(3001);

//https://twitter.com/screen-name/status/id_str-value
//https://stackoverflow.com/questions/41090108/how-to-embed-a-tweet-on-a-page-if-i-only-know-its-id
http
  .createServer((req, res) => {
    if (req.url === "/twitter") {
      TwitterAPICall.TwitterAPI(function (response) {
        console.log(response);
        res.end();
      });
    }
  })
  .listen(3002);
