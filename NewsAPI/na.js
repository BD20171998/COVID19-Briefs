$.ajax({
    url: "http://localhost:5501/newsapi",
    type: "GET",
    dataType: "json",
    success: (data) => {
        // $('#results').append(JSON.stringify(data));
    
        // works
        data = JSON.stringify(data);
        // _author = data["source"]["name"];

        $('#results').append(data);


        // works
        // $('#results').append(data);

        displayNews(data);
    // console.log(data);
    },
});

function displayNews(data) {
    //works
    // data = data[12];
    // $('#results').append(data);

    





    // $.each(data.articles, function (i, value) {
    //   $('#results').append(newsHelper(value));
    // });
  }

function newsHelper(value) {
//   _author = value.author;
//   _source = value.data.url;


return `
    <div class="news">
    <p> does this work</p>
    </div>
   
  `;

//   <div class="news">
//     ${value["source"]["name"]}:  <u>${value.title}</u><br>
//     <img src="${value.urlToImage}" width="250" height="150" /src><br>
//     ${value.description}<br></br>
}