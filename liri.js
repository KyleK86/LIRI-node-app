// Read and set environment variables
require("dotenv").config();

//CODE TO IMPORT KEYS.JS
var keys = require("./key.js");
var axios = require("axios");



//SWITCH STATEMENT TO DEFINE ARGUMENTS
var action = process.argv[2];
var input = process.argv[3];

switch (action) {
    case "concert-this":
        concertThis(input);
        break;

    case "spotify-this-song":
        spotify(input);
        break;

    case "movie-this":
        movie(input);
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
}

// FUNCTIONS
function concertThis() {
    var queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"
    var moment = require("moment");
    // Make a request for a user with a given ID
    axios.get(queryURL)

        .then(function (response) {
            var booty = response.data[0];
            console.log("----------------------------------------------------------------");
            console.log("Venue Name: " + booty.venue.name);
            console.log("----------------------------------------------------------------");
            console.log("Country: " + booty.venue.country);
            console.log("----------------------------------------------------------------");
            console.log("Event Time: " + moment(booty.datetime).format("MM/DD/YYYY"));
            console.log("----------------------------------------------------------------");

        })
        .catch(function (error) {
            console.log(error);
        });
}

function spotify() {

    if (input === undefined) {
        input = "The Sign Ace of Base"
    }
    //ACCESS SPOTIFY KEY
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);

    spotify
        .search({
            type: 'track',
            query: input
        })
        .then(function (response) {
            var spoils = response.tracks.items[0];
            console.log(spoils);
            console.log("----------------------------------------------------------------");
            console.log(spoils.album.artists[0].name);
            console.log("----------------------------------------------------------------");
            console.log(spoils.name);
            console.log("----------------------------------------------------------------");
            console.log(spoils.preview_url);
            console.log("----------------------------------------------------------------");
            console.log(spoils.album.name);
            console.log("----------------------------------------------------------------");



        })
        .catch(function (err) {
            console.log(err);
        });
}

function movie() {
    var omdb = keys.omdb.id;
    var queryURL = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=" + omdb;

    axios.get(queryURL)
        .then(function (response) {
            var movieResponse = response.data;
            console.log("----------------------------------------------------------------");
            console.log(movieResponse.Title);
            console.log("----------------------------------------------------------------");
            console.log(movieResponse.Year);
            console.log("----------------------------------------------------------------");
            console.log(movieResponse.imdbRating);
            console.log("----------------------------------------------------------------");
            for (var i = 0; i < movieResponse.Ratings.length; i++) {
                if (movieResponse.Ratings[i].Source === "Rotten Tomatoes") {
                    console.log("Rotten Tomatoes: " + movieResponse.Ratings[i].Value);

                }
            }
            console.log("----------------------------------------------------------------");
            console.log(movieResponse.Country);
            console.log("----------------------------------------------------------------");
            console.log(movieResponse.Language);
            console.log("----------------------------------------------------------------");
            console.log(movieResponse.Plot);
            console.log("----------------------------------------------------------------");
            console.log(movieResponse.Actors);
            console.log("----------------------------------------------------------------");

        })
        .catch(function (error) {
            console.log(error);
        });



}

function doWhatItSays() {

}