// Read and set environment variables
require("dotenv").config();

//CODE TO IMPORT KEYS.JS
var keys = require("./key.js");
var axios = require("axios");

//ACCESS SPOTIFY KEY
// var spotify = new Spotify(keys.spotify);

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
            console.log(booty);
            console.log("----------------------------------------------------------------");
            console.log(booty.venue.name);
            console.log("----------------------------------------------------------------");
            console.log(booty.venue.country);
            console.log("----------------------------------------------------------------");

            console.log(moment(booty.datetime).format("MM/DD/YYYY"));

        })
        .catch(function (error) {
            console.log(error);
        });
}

function spotify() {

}

function movie() {

}

function doWhatItSays() {

}