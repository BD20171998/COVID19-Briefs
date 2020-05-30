const Twit = require("twit");

//Installing node10
// curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
// sudo apt-get install -y nodejs

//Generating the bearer token https://developer.twitter.com/en/docs/basics/authentication/oauth-2-0/bearer-tokens
//Youtube: https://www.youtube.com/watch?v=jpV1B2N4IxY&t=188s
//https://github.com/tombaranowicz/TwitterMonitoringJavaScript

//Exporting API call to new file
//https://www.youtube.com/watch?v=ZbtZ_79UmjI&t=309s

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

function bob() {
  T.get("search/tweets", { q: "covid19", count: 10 })
    .then((rawData) => {
      //console.log(data1.data.statuses[0]);
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
      console.log(blocks);
    })
    // .then((TwitterHTMLs) => console.log(TwitterHTMLs))
    .catch((err) => console.log(err));
}

function TwitterHTML(urls) {
  let TwitterHTMLs = [];

  for (let j = 0; j < urls.length; j++) {
    T.get("https://publish.twitter.com/oembed", { url: urls[j] })
      .then((rawData) => {
        TwitterHTMLs.push(rawData.data.html);
        return TwitterHTMLs;
      })

      .catch((err) => console.log(err));
  }
}

bob();
