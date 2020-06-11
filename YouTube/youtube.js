const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);
const query = require("../app");

const YouTubeCall = (YouTubeData) => {
  $.ajax({
    type: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    data: {
      key: "",
      q: "covid19" + " " + query.q,
      part: "snippet",
      maxResults: 15,
      type: "video",
      videoEmbeddable: true,
    },
    success: function (data) {
      return YouTubeData(data);
    },
    error: function (response) {
      return YouTubeData(response);
    },
  });
};

module.exports.YouTubeAPI = YouTubeCall;
