const express = require("express");
const axios = require("axios");
const TwitterAPICall = require("./Twitter/twitter");
const YouTubeAPICall = require("./YouTube/youtube");
const RedditAPICall = require("./RedditAPI/redditapi");
//const NewsAPICall = require("./NewsAPI/newsapi");
const StatsAPICall = require("./Covid19stats/stats");
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

app.get("/reddit", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  RedditAPICall.RedditAPI(function (response) {
    res.send(JSON.stringify(response));
  });
});

app.get("/newsapi", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=fb1aac01c63a443ca9c80a7c1a750ea9"
    )
    .then(function (response) {
      var key = response["data"]["articles"];
      res.send(JSON.stringify(key));

      // var articles = response["data"]["articles"];
      // res.write(JSON.stringify(articles));

      // res.end();
    });
});

app.get("/twitter", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  TwitterAPICall.TwitterAPI(function (response) {
    //res.send translates html automatically
    res.write(JSON.stringify(response));
    res.end();
  });
});

app.get("/stats", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  StatsAPICall.StatsAPI(function (response) {
    res.write(JSON.stringify(response));
    res.end();
  });
});

app.listen(5501, () => {
  console.log("Server app now running on port 5501");
});
