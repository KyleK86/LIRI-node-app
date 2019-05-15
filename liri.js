// Read and set environment variables
require("dotenv").config();

//CODE TO IMPORT KEYS.JS
var keys = require("./key.js");
var axios = require("axios");



//SWITCH STATEMENT TO DEFINE ARGUMENTS
var action = process.argv[2];
var input = process.argv[3];

function userCommand() {
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
        default:
            console.log("ABOUT THE APP. LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands. The Commands are: concert-this, spotify-this-song, movie-this, do-what-it-says");

    }
}
userCommand(action, input);

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

function spotify(input) {
    //ACCESS SPOTIFY KEY
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);

    // Default song
    if (input === undefined) {
        input = "The Sign Ace of Base"
    }
    spotify
        .search({
            type: 'track',
            query: input
        })
        .then(function (response) {
            var spoils = response.tracks.items[0];
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
    var fs = require("fs");

    // We will read the existing bank file
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);

        }
        var dataArray = data.split(",");
        var action = dataArray[0];
        var input = dataArray[1];
        console.log(action);
        console.log(input);

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

        }

    });
}