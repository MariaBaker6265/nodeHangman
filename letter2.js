// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================
//var createSongList = require("./word.js");
//var songList = require("./word.js");
// // Array of song options (all lowercase).
//var gameSong = songList.toLowerCase();
var prompt = require('prompt');
//Test array because array from word file is not working.
var gameSongTest = ["hey jude", "satisfaction", "walk this way"];
//Letter variable to be used with the prompt function.
 var letter = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Guess must be only letters or spaces.',
        required: true
    
    }
  }
};

// Solution will be held here.
    var chosenSong = "";
// This will break the solution into individual letters to be stored in array.
    var lettersInChosenSong = [];
// This will be the number of blanks we show based on the solution
    var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
    var blanksAndSuccesses = [];
// Holds all of the wrong guesses
    var wrongGuesses = [];

// Game counters
    var correctCounter = 0;
    var incorrectCounter = 0;
    var numGuesses = 12;

// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// =========================================================================================

// startGame function.
    function startGame() {
// Reset the guesses back to 0.
    numGuesses = 0;

// Solution is chosen randomly from songList.
    chosenSong = gameSongTest[Math.floor(Math.random() * gameSongTest.length)];
// The song is broken into individual letters and spaces.
    lettersInChosenSong = chosenSong.split("");
// We count the number of letters in the word.
    numBlanks = lettersInChosenSong.length;

// We print the solution in console (for testing).
    console.log(chosenSong);


// CRITICAL LINE - Here we *reset* the guess and success array at each round.
blanksAndSuccesses = [];
// CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
wrongGuesses = [];

//Initially fill blanksAndSuccesses with blanks based on number of letters in solution.
for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
    }
            //Set the number of guesses to the length of the chosenSong plus 7.
            numGuesses = chosenSong.length + parseInt(7); 

// Print the initial blanks in console.
    console.log(blanksAndSuccesses);
    }
//Prints the number of guesses
    console.log(numGuesses);


// //   }
// //  }


// // // MAIN Function
// // // ==================================================================================================

// // // Starts the Game by running the startGame() function
    startGame();

  // Start the prompt 
  prompt.start();
 
  // Get letter from the user. 
  prompt.get(letter, function (err, result) {

    // Log the results. 
    console.log('Letter guessed: ' + result.name);
  });

//   checkLetters(this.letter);

// //checkLetters(letterGuessed);
// //   // Runs the code after each round is done.
// //roundComplete();
// //}
