var colors = require('colors');
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'gray',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
    magenta: 'magenta',
    america: 'america',
    zebra: 'zebra'
});

console.log(colors.silly('this is loaded'));

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {
    id: process.env.OMDB_KEY
}