const request = require('request');

let url = "https://www.reddit.com/r/COVID19/hot.json?limit=10"

request.get(url, (err, response, body) =>
{
    if (err) {
        console.log(err);
        return;
    }
    const jsoned = JSON.parse(body);

    //this line expands the children
    const children_json = JSON.parse(body).data;

    const posts = children_json.children;

    for (let i = 0; i < posts.length; i++) {
        // this is how you get the titles
        console.log("Title:" + posts[i].data.title);

        //this get just the subreddit permalink
        console.log("URL:" + "https://reddit.com" + posts[i].data.permalink)
    
    // need to figure out how we want to display the reddit info
    };

});