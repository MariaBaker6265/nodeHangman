// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================
//var createSongList = require("./word.js");
//var songList = require("./word.js");
// // Array of song options (all lowercase).
//var gameSong = songList.toLowerCase();
var prompt = require('prompt');
//Test array because array from word file is not working.
var gameSongTest = ["hey jude", "satisfaction", "darion", "lou", "greg", "jordan",
 "jasmine", "stephen", "jacob", "adam", "rui", "luis"];
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

            //Set the number of guesses to the length of the chosenSong plus 7.
            numGuesses = chosenSong.length + parseInt(7);
    }
}
// Print the initial blanks in console.
    console.log(blanksAndSuccesses);

//Prints the number of guesses
    console.log(numGuesses);

// // It's where we will do all of the comparisons for matches.
// // Again, it's not being called here. It's just being made for future use.
// function checkLetters(letter) {

// // This boolean will be toggled based on whether or not a user letter is found anywhere in the word.
//     var letterInSong = false;

//     // Check if a letter exists inside the array at all.
//     for (var i = 0; i < numBlanks; i++) {
 
//         if (chosenSong[i] === letter) {
        
//         // If the letter exists then toggle this boolean to true. This will be used in the next step.
//         letterInSong = true;
//     }
//    }

// // If the letter exists somewhere in the word, then figure out exactly where (which indices).
// if (letterInSong) {

//   // Loop through the word.
// for (var j = 0; j < numBlanks; j++) {

//    // Populate the blanksAndSuccesses with every instance of the letter.
//   if (chosenSong[j] === letter) {

//     // Here we set the specific space in blanks and letter equal to the letter when there is a match.
//     blanksAndSuccesses[j] = letter;
//      }
//    }
//   // Logging for testing.
//    console.log(blanksAndSuccesses);
//   }
//   // If the letter doesn't exist at all...
//   else {
//     // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
//     wrongGuesses.push(letter);
//      numGuesses--;
//   }
// }

// //roundComplete() function
// // // Here we will have all of the code that needs to be run after each guess is made

// // function roundComplete() {

// //     // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
// //    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

// //    // If we have gotten all the letters to match the solution...
// //   if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
// // //     // ..add to the win counter & give the user an alert.
// //     winCounter++;
// //     console.log("You win!");

// //    startGame();
// //   }


// // // If we've run out of guesses..
// //    else if (numGuesses === 0) {
// // // Add to the loss counter.
// //   lossCounter++;
// // // Give the user an alert.
// //     console.log("You lose");
// // // Restart the game.
// //    startGame();
// //   }
// //  }


// // // MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// // // ==================================================================================================

// // // Starts the Game by running the startGame() function
    startGame();

//   // Start the prompt 
//   // 
//   prompt.start();
 
//   // Get letter from the user. 
//   prompt.get(letter, function (err, result) {

//     // Log the results. 
//     console.log('Letter guessed: ' + result.name);
//   });

//   checkLetters(this.letter);

// //checkLetters(letterGuessed);
// //   // Runs the code after each round is done.
// //roundComplete();
// //}
