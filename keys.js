// console.log('this is loaded');

twitter = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

// var twitterCreds = exports.twitter;
// var spotifyCreds = exports.twitter;

// module.exports = {
//     essentials: essentials,
//     niceToHaves: niceToHaves
//   };