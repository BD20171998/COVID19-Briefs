const express = require("express");
const axios = require("axios");
const TwitterAPICall = require("./Twitter/twitter");
const YouTubeAPICall = require("./YouTube/youtube");
const RedditAPICall = require("./RedditAPI/redditapi");
const NewsAPICall = require("./NewsAPI/newsapi");
const StatsAPICall = require("./Covid19stats/stats");
//const http = require("http");
const bodyParser = require("body-parser");

const app = express();

//see https://stackoverflow.com/questions/38294730/express-js-post-req-body-empty
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Testing output on http://localhost:5501/youtube
app.get("/youtube", (req, res) => {
  //See https://stackoverflow.com/questions/47523265/jquery-ajax-no-access-control-allow-origin-header-is-present-on-the-requested
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  YouTubeAPICall.YouTubeAPI(function (response) {
    res.write(JSON.stringify(response));
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
  NewsAPICall.NewsAPI(function (response) {
    console.log(response);
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

//runs fine on 5501 but other GET does not run then
// app.post("/youtube-submit", (req, res) => {
//   let q = req.body.myquery;
//   console.log("POST ran");
//https://stackoverflow.com/questions/3922994/share-variables-between-files-in-node-js
// exports.q = q;

//res.send('You sent the name "' + q + '".');
// res.end();
//res.redirect("http://localhost:5502/youtube.html");
// });

app.listen(5501, () => {
  console.log("Server app now running on port 5501");
});
