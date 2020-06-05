$(document).ready(() => {
  $.ajax({
    url: "http://localhost:5501/twitter",
    type: "GET",
    dataType: "json",
    success: (data) => {
      embedBlock(data);
    },
  });
});

function embedBlock(data) {
  $("#results").append(data);
}
