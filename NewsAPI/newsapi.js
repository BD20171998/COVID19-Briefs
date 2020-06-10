const request = require("request");

const NewsAPICall = (NewsData) => {
  var today = new Date();

  let url =
    "https://newsapi.org/v2/everything?" +
    "q=coronavirus|COVID19&" +
    `from=${today}&` +
    "sortBy=relevancy&" +
    "apiKey=";

  request.get(url, (err, response, body) => {
    if (err) {
      return NewsData(err);
    }
    const key = JSON.parse(body);
    return NewsData(body);
  });
};

module.exports.NewsAPI = NewsAPICall;
