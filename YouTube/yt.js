$(document).ready(() => {
  $("#search-button").click(() => {
    let ytquery = $("#query").val();

    $.ajax({
      url: "http://localhost:5501/youtube",
      type: "GET",
      dataType: "json",
      success: (data) => {
        embedVideo(data);
      },
    });
  });
});

function embedVideo(data) {
  $.each(data.items, function (i, value) {
    $("#results").append(addVideo(value));
  });
}

function addVideo(value) {
  srcVid = "https://www.youtube.com/embed/" + value.id.videoId;
  VidTitle = value.snippet.title;
  return `
  <div class="videoWrapper">
  <h5>${VidTitle}</h3>
  <iframe width="560" height="349" src="${srcVid}"></iframe>
  </div>
  `;
}

function delVideo(data) {
  $.each(data.items, function (i, value) {
    $("#results").remove();
  });
}
