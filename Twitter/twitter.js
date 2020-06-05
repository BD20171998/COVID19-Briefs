const Twit = require("twit");

const apikey = "";
const apiSecretKey = "";
const accessToken = "";
const accessTokenSecret = "";

let T = new Twit({
  consumer_key: apikey,
  consumer_secret: apiSecretKey,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
});

const TwitterCall = (TwitterData) => {
  T.get("search/tweets", { q: "covid19", count: 10 })
    .then((rawData) => {
      let urlList = [];
      for (let i = 0; i < rawData.data.statuses.length; i++) {
        let tweetID = rawData.data.statuses[i].id_str;
        let twitterUser = rawData.data.statuses[i].user.screen_name;

        let tweetURL =
          "https://twitter.com/" + twitterUser + "/status/" + tweetID;
        urlList.push(tweetURL);
      }
      return urlList;
    })
    .then((urlList) => {
      let blocks = TwitterHTML(urlList);

      return blocks;
    })
    .then((data) => TwitterData(data))

    .catch((err) => console.log(err));
};

async function TwitterHTML(urls) {
  let TwitterHTMLs = [];

  for (let j = 0; j < urls.length; j++) {
    await T.get("https://publish.twitter.com/oembed", { url: urls[j] })
      .then((rawData) => {
        TwitterHTMLs.push(rawData.data.html);
      })

      .catch((err) => console.log(err));
  }
  return TwitterHTMLs;
}

module.exports.TwitterAPI = TwitterCall;
