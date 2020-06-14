const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);
const statInputs = require("../app");

const StatsCall2 = (StatsData2) => {
  let start = statInputs.stats.start;
  let end = statInputs.stats.end;
  let slug = statInputs.stats.slug;
  let confirmed = statInputs.stats.confirmed;
  let recovered = statInputs.stats.recovered;
  let deaths = statInputs.stats.deaths;

  let type = "test123";

  if (statInputs.stats.confirmed === "true") {
    type = "confirmed";
  } else if (statInputs.stats.recovered === "true") {
    type = "recovered";
  } else if (statInputs.stats.deaths === "true") {
    type = "deaths";
  }

  let settings = {
    url: `https://api.covid19api.com/total/country/${slug}/status/${type}?from=${start}&to=${end}`,
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    return StatsData2(response);
  });
};

module.exports.StatsAPI2 = StatsCall2;
