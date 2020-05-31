const fetch = require("node-fetch");

let url =
  "https://newsapi.org/v2/everything?" +
  "q=coronavirus&" +
  //"from=2020-05-10&" +
  "sortBy=popularity&" +
  //"pageSize=6&" +
  "apiKey=";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData);
    parentElement = document.getElementById("results");

    for (let i = 0; i < jsonData.articles.length; i++) {
      codeBlock = `${jsonData.articles[i]["source"]["name"]}:  <u>${jsonData.articles[i].title}</u><br>
       
      <img src="${jsonData.articles[i].urlToImage}" width="250" height="150" /src><br>
${jsonData.articles[i].description}<br>`;
      $("#results").append(codeBlock);
    }
  });
