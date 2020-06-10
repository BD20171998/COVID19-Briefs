$.ajax({
  url: "http://localhost:5501/newsapi",
  type: "GET",
  dataType: "json",
  success: (data) => {
    data = JSON.parse(data);
    let total = data.totalResults;
    let length = Math.min(30, total);

    for (let i = 0; i < length; i++) {
      let url = data.articles[i].url;
      let title = data.articles[i].title;
      let author = data.articles[i].author;
      let urlToImage = data.articles[i].urlToImage;
      let description = data.articles[i].description;
      let name = data.articles[i].source.name;

      htmlBlock = `<br><div id="example3"><h4><a href="${url}">${title} by ${author}</a></h4>
      <img src="${urlToImage}" width="450" height="250">
      <p>${description}</p>
      <h4>Source: ${name}</h4></div>
      <br>
      `;

      $("#results").append(htmlBlock);
    }
  },
});
