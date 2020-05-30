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

const TwitterCall = (TwitterData) => {
  let T = new Twit({
    consumer_key: apikey,
    consumer_secret: apiSecretKey,
    access_token: accessToken,
    access_token_secret: accessTokenSecret,
  });

  T.get("search/tweets", { q: "covid19", count: 3 }, function (
    err,
    data,
    response
  ) {
    if (err) {
      return TwitterData(err);
    }
    return TwitterData(data);
  });
};

module.exports.TwitterAPI = TwitterCall;
