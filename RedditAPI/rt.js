$(document).ready(() => {
  $("#search-button").click(() => {
    $("div#demoObject").remove();
    $.ajax({
      url: "http://localhost:5501/reddit-submit",
      type: "POST",
      dataType: "json",
      data: { query: document.querySelector("#query").value },
      success: () => {},
    });

    $.ajax({
      url: "http://localhost:5501/reddit",
      type: "GET",
      dataType: "json",

      success: (data) => {
        displayLink(data);
      },
    });
  });
});

function displayLink(data) {
  $.each(data.data.children, function (i, value) {
    let _title = value.data.title;
    let _perm = "https://www.reddit.com" + value.data.permalink;
    let _source = value.data.url;
    let htmlBlock = `<div id="demoObject"><p class="demoFont"><b>${_title}</b></p>
    <br>
    <p class="demoFont2">Reddit discussion: <a href="${_perm}">${_perm}</a></p>
    <br>
    <p class="demoFont2">Source: <a href="${_source}">${_source}</a></p>
    </div> <br>`;
    $("#reddits").append(htmlBlock);
  });
}
