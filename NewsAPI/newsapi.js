//must encrypt keys ie have JS call to the back end (the server) and have the server return the data here
//https://gomakethings.com/keeping-credentials-secure-when-making-api-calls-with-javascript/
//https://medium.com/better-programming/how-to-hide-your-api-keys-c2b952bc07e6
//https://www.freecodecamp.org/news/private-api-keys/
//http://billpatrianakos.me/blog/2016/02/15/securing-api-keys-in-a-javascript-single-page-app/
//https://softwareengineering.stackexchange.com/questions/227745/best-way-to-hide-api-key-in-source-code

//https://www.moesif.com/blog/technical/api-design/REST-API-Design-Filtering-Sorting-and-Pagination/

let url =
  "https://newsapi.org/v2/everything?" +
  "q=coronavirus&" +
  //"from=2020-05-10&" +
  "sortBy=popularity&" +
  //"pageSize=6&" +
  "apiKey=";
let req = new Request(url);
fetch(req)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    parentElement = document.getElementById("results");

    for (let i = 0; i < jsonData.articles.length; i++) {
      codeBlock = `${jsonData.articles[i]["source"]["name"]}:  <u>${jsonData.articles[i].title}</u><br>
       
      <img src="${jsonData.articles[i].urlToImage}" width="250" height="150" /src><br>
${jsonData.articles[i].description}<br>`;
      $("#results").append(codeBlock);
    }
  });
