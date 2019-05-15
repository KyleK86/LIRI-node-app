# liri-node-app

**Developer**: `Kyle Knox`

**Created**: `May 2019`

- - -

## ABOUT THE APP
LIRI is a Node.js based application that takes in parameters through the terminal and gives back data. The user has the option of using four commands (listed below) along with parameters associated with the commands. The  `Commands` are:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`
   - - -

## HOW TO USE LIRI
### **Video Guide**

Watch the video here: Place link to Google drive video here 

### **Step by Step instructions**

1. Open your terminal such as Bash.
2. Navigate to the folder that contains the `liri.js` file. 
3. Depending on the command you run, the output will vary. 

    **Example 1**: Run the `concert-this` command
    
        node liri.js concert-this <name of artist or band>
    
    Output: The system will display a list of all events and locations where the artist or band will perform. It may display multiple results. See screen-shot below:

    ![Results](/screenshots/terminalShot1.jpg)

    **Example 2**: Run the `spotify-this-song` command
    
        node liri.js spotify-this-song <name of song>
    
    Output: The system will display a list of information associated with the song. It can display multiple results. See screen-shot below:

    ![Results](/screenshots/terminalShot2.jpg)

    **Example 3**: Run the `movie-this` command
    
        node liri.js movie-this <name of movie>
    
    Output: The system will display information associated with the movie. See screen-shot below:

    ![Results](/screenshots/terminalShot3.jpg)


    **Example 4**: Run the `do-what-it-says` command
        
        node liri.js do-what-it-says
        
    Output: The system will read the text in the random.txt file, and perform it as if it were code.
    
    See screen-shot below:

    ![Results](/screenshots/terminalShot4.jpg)

- - -

## TECHNOLOGIES USED
* Javascript
* Nodejs
* Node packages:
    * Node-Spotify-API
    * Request
    * Moment
    * DotEnv
* APIs used:
    * Bands in Town
    * OMDB
* Git
* GitHub