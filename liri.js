// Read and set environment variables
require("dotenv").config();
var colors = require('colors');

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
            console.log(colors.verbose("ABOUT THE APP. LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands. The Commands are: concert-this, spotify-this-song, movie-this, do-what-it-says"));

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
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.verbose("Venue Name: ") + colors.info(booty.venue.name));
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.verbose("Country: ") + colors.info(booty.venue.country));
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.verbose("Event Time: ") + colors.info(moment(booty.datetime).format("MM/DD/YYYY")));
            console.log(colors.silly("----------------------------------------------------------------"));

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
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.debug("Artist Name: ") + colors.magenta(spoils.album.artists[0].name));
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.debug("Song Name: ") + colors.magenta(spoils.name));
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.debug("Preview URL: ") + colors.magenta(spoils.preview_url));
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.debug("Album Name: ") + colors.magenta(spoils.album.name));
            console.log(colors.silly("----------------------------------------------------------------"));



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
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.magenta("Title: ") + colors.bgMagenta(movieResponse.Title));
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.magenta("Year: ") + colors.bgMagenta(movieResponse.Year));
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.magenta("IMDB Rating: ") + colors.bgMagenta(movieResponse.imdbRating));
            console.log(colors.silly("----------------------------------------------------------------"));
            for (var i = 0; i < movieResponse.Ratings.length; i++) {
                if (movieResponse.Ratings[i].Source === "Rotten Tomatoes") {
                    console.log(colors.magenta("Rotten Tomatoes: ") + colors.bgMagenta(movieResponse.Ratings[i].Value));

                }
            }
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.magenta("Country: ") + colors.bgMagenta(movieResponse.Country));
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.magenta("Language: ") + colors.bgMagenta(movieResponse.Language));
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.magenta("Plot: ") + colors.bgMagenta(movieResponse.Plot));
            console.log(colors.silly("----------------------------------------------------------------"));
            console.log(colors.magenta("Actors: ") + colors.bgMagenta(movieResponse.Actors));
            console.log(colors.silly("----------------------------------------------------------------"));
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