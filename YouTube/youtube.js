const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

const YouTubeCall = (YouTubeData) => {
  $.ajax({
    type: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    data: {
      key: "",
      q: "covid19",
      part: "snippet",
      maxResults: 5,
      type: "video",
      videoEmbeddable: true,
    },
    success: function (data) {
      return YouTubeData(data);
    },
    error: function (response) {
      return YouTubeData(err);
    },
  });
};

module.exports.YouTubeAPI = YouTubeCall;
