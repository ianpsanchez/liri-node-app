require("dotenv").config();
require("./keys");
var Spotify = require('node-spotify-api');
var request = require("request");
var Twitter = require('twitter');

///\/\/\/\/\/\/\/\/\/\/\/--- Main ---\/\/\/\/\/\/\/\/\/\/\/\/ 

var inTake = process.argv;

// console.log('inTake values --> ' + inTake[2]);

var command = inTake[2];
var songOrmovie = JSON.stringify(inTake.slice(3).join(" "));

console.log(command + "   " + songOrmovie);

switch (command) {

    case 'my-tweets':
        // console.log('hello');

        var client = new Twitter({
            consumer_key: twitter.consumer_key,
            consumer_secret: twitter.consumer_secret,
            access_token_key: twitter.access_token_key,
            access_token_secret: twitter.access_token_secret
        });

        // var params = {screen_name: '@ipsanchez204'};
        var params = { q: 'ipsanchez204' };
        client.get('search/tweets', params, function (error, tweets, response) {
            if (!error) {
                for (var i = 0; i < tweets.statuses.length; i++) {
                // for (var i = 0; i < 3; i++) {
                    var ianTweetInfo = tweets.statuses[i];
                    console.log('##########-TWEETS-##########  ' + i + i + i + i + i);
                    // console.log('---- taya errors ----');
                    console.log('Created: ', ianTweetInfo.created_at);
                    console.log('Text: ', ianTweetInfo.text);
                    // console.log('--- hey...');
                    console.log('##########-END OF TWEETS-##########  ' + i + i + i + i + i);
                    console.log('\n\n');
                }

            }

            // console.log('twitter part error:  ' + JSON.stringify(error));
        });
        break;

    case 'spotify-this-song':
        // console.log('world');

        var spotify = new Spotify({
            id: 'e50d73bfb8f6402499401d9ef2ac9699',
            secret: '02fbb91393b74f66b812f6b7f239661f'
        });

        if(songOrmovie === ""){ 
            songOrmovie = 'the sign';
        }

        spotify.search({ type: 'track', query: songOrmovie }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            var catchTheSpotify = JSON.stringify(data);
            var catchTheSpotifyParse = JSON.parse(catchTheSpotify);
            // var catchTheSpotify = JSON.stringify(data);
            // var catchTheSpotify = JSON.stringify(data); 

            console.log('Artist\'s Name: ' + catchTheSpotifyParse.tracks.items[0].artists[0].name);
            console.log('Song Name: ' + catchTheSpotifyParse.tracks.items[0].name);
            console.log('Spotify Preview Link: ' + catchTheSpotifyParse.tracks.items[0].preview_url);
            console.log('Album Name: ' + catchTheSpotifyParse.tracks.items[0].album.name);


            //artist //song name //preview link from spotify //name of album
        });
        break;
        
    case 'movie-this':
        // console.log('earth');

        if(!songOrmovie){ songOrmovie = 'mr. nobody'; }

        request("http://www.omdbapi.com/?t=" + songOrmovie + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {

                // console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
                // console.log("The movie's rating is: " + JSON.parse(body).Title);
                // console.log("The movie's rating is: " + JSON.stringify(JSON.parse(body)));
                console.log("\n\n");

                //   Title of the movie.
                console.log("Movie Title: " + JSON.parse(body).Title);
                // * Year the movie came out.
                console.log("Year Released: " + JSON.parse(body).Year);
                // * IMDB Rating of the movie.
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                // * Rotten Tomatoes Rating of the movie.
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                // * Country where the movie was produced.
                console.log("Country Produced: " + JSON.parse(body).Country);
                // * Language of the movie.
                console.log("Language: " + JSON.parse(body).Language);
                // * Plot of the movie.
                console.log("Movie Plot: " + JSON.parse(body).Plot);
                // * Actors in the movie.
                console.log("Actors: " + JSON.parse(body).Actors);

                console.log('\n\n');

            }
        });
        break;

    case 'do-what-it-says':
        // console.log('water');

        var fs = require("fs");

        // This block of code will read from the "movies.txt" file.
        // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
        // The code will store the contents of the reading inside the variable "data"
        fs.readFile("random.txt", "utf8", function (error, data) {

            // If the code experiences any errors it will log the error to the console.
            if (error) {
                return console.log(error);
            }

            // We will then print the contents of data
            console.log('RANDOM TEXT -----------------------  ' + data);

            // Then split it by commas (to make it more readable)
            var dataArr = data.split(",");

            // We will then re-display the content as an array for later use.
            console.log(dataArr[1]);

            

        });
        break;

    default:
        console.log('Bad command or filename');
        break;
}