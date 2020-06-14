const express = require("express");
const axios = require("axios");

const TwitterAPICall = require("./Twitter/twitter");
const YouTubeAPICall = require("./YouTube/youtube");
const RedditAPICall = require("./RedditAPI/redditapi");
const NewsAPICall = require("./NewsAPI/newsapi");
const StatsAPICall = require("./Covid19stats/stats");
const StatsAPICall2 = require("./Covid19stats2/stats2");

const bodyParser = require("body-parser");

const app = express();

//see https://stackoverflow.com/questions/38294730/express-js-post-req-body-empty
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/youtube", (req, res) => {
  //See https://stackoverflow.com/questions/47523265/jquery-ajax-no-access-control-allow-origin-header-is-present-on-the-requested
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  YouTubeAPICall.YouTubeAPI((response) => {
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

app.post("/reddit-submit", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  let q = req.body.query;

  exports.q = q;
});

app.get("/newsapi", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  NewsAPICall.NewsAPI(function (response) {
    res.write(JSON.stringify(response));
    res.end();
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

app.post("/stats2-submit", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  let userInputs = req.body;

  exports.stats = userInputs;
});

app.get("/stats2", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  StatsAPICall2.StatsAPI2(function (response) {
    res.send(JSON.stringify(response));
  });
});

app.post("/youtube-submit", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  let q = req.body.query;

  exports.q = q;
});

app.listen(5501, () => {
  console.log("Server app now running on port 5501");
});
