$.ajax({
    url: "http://localhost:5501/reddit",
    type: "GET",
    dataType: "json",
    success: (data) => {
      displayLink(data);
    },
});

// data.children.data.url 
function displayLink(data) {
    $.each(data.data.children, function (i, value) {
      $("#results").append(value.data.url);
    });
  };


//   const key = JSON.parse(body);
//   // console.log(key);

//   console.log(key.data.children[0].data.url);
















// var request = new XMLHttpRequest();
// request.open('GET', 'https://www.reddit.com/r/COVID19/hot.json?limit=10');

// request.onload = function() {
// 	var response = request.response;
//     var parsedData = JSON.parse(response).data;
//     var posts = parsedData.children;
//     // var name = posts[1].data.title

//     for (let i = 0; i < posts.length; i++) {
//         var name = posts[i].data.title;
//         var products = document.createElement('li');
//         products.innerHTML = name;
//         document.body.appendChild(products);
//     }

// 	// var products = document.createElement('li');
// 	// products.innerHTML = name;
// 	// document.body.appendChild(products);
// };
