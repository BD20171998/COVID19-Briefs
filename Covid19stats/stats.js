const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

const StatsCall = (StatsData) => {
  let settings = {
    url: "https://api.covid19api.com/summary",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    return StatsData(response);
  });
};

module.exports.StatsAPI = StatsCall;
