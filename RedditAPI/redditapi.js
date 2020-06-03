const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

const RedditCall = (RedditData) => {
    $.ajax({
        type: "GET",
        url: "https://www.reddit.com/r/COVID19/hot.json",
        data: {
           limit: 20, 
        },
        success: function (data) {
            return RedditData(data);
        },
        error: function (response) {
            return RedditData(err);
        },
    });
};

module.exports.RedditAPI = RedditCall;