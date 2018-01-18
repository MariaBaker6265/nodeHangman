// Dependency for inquirer npm package.
var inquirer = require("inquirer");

// Constructor function for creating song objects.
function Song (band, favsong) {
  this.band = band;
  this.favsong = favsong;
  this.printInfo = function() {
    console.log("Band: " + this.band + "\nSong: " + this.favsong);
  };
}

// songList array contains all of song objects
var songList = [];

// recursive function which will allow the user to create 3 songs
function createSongList() {
  // if the length of the team array is 8 or higher, no more questions will be asked
  if (songList.length < 3) {
    console.log("\nNEW SONG!\n");
    
    inquirer.prompt([
      {
        name: "band",
        message: "Enter a band name: "
      }, {
        name: "favsong",
        message: "Enter a song by that band: "
      },

    ]).then(function(answers) {
      // Runs the constructor and places the new song object into the variable song.
  
      var song = new Song(answers.band, answers.favsong);
      // adds a song to the songList array if there are less than three o.
   
      if (songList.length < 3) {
          songList.push(song);
        console.log(song.favsong + " added to the Hangman game song list.");
        
      }
      song.printInfo();
      // Runs the createSongList function again (recursion).
      createSongList();
      
    });
  }
};

// Call the createSongList() function to start the code.
createSongList();

//Make this module available to other programs.
module.exports.createSongList = createSongList;
module.exports.songList = songList;




