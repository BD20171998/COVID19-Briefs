const fetch = require("node-fetch");
const request = require('request');
// const request = require('request');
const dict = {};


// may want to change to top stories instead of everything, look at other endpoints
let url =
  "https://newsapi.org/v2/everything?" +
  "q=coronavirus&" +
  //"from=2020-05-10&" +
  "sortBy=popularity&" +
  //"pageSize=6&" +
  "apiKey=";

request.get(url, (err, response, body) => {
    if (err) {
        console.log(err);     
        return;
    }
        const key = JSON.parse(body);

        for (let i = 0; i < key.articles.length; i++) {
            //console.log(key.articles[i]);
            //console.log(key.articles[i].author);
            
            codeBlock = `${key.articles[i]["source"]["name"]}:  <u>${key.articles[i].title}</u><br>
            <img src="${key.articles[i].urlToImage}" width="250" height="150" /src><br>
            ${key.articles[i].description}<br>`;
            
            console.log(codeBlock);
        }
});