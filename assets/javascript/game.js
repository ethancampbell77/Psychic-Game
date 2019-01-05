// Psychic Game Javascript //

// Variable for Alphabet //
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables used to keep track of our wins, losses and ties //
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var usedLetters = [];

// Computer Chooses Letter at Random //
    
   
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// Choice is logged to console //
    console.log(computerChoice);

// Key Event //
    document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(event);

// Appending UserGuess to usedLetters Array above //
    usedLetters.push(event.key);

// Resets the Guess Counter to 10 attemps after a Win or Loss //
    var resetGuesses = function() {
    guesses = 10;
    usedLetters = [];
    }

// Conditionals to establish Guesses, Wins & Losses //
 
// Determins if User Wins and Resets Game //
    if(userGuess === computerChoice){
        wins++;
        document.getElementById("winMusic").play();
        resetGuesses(); 
    }
// Incorrect Guess is subtracted from Total Number of Attempts //
    else{
        guesses--;
    }
 //  Determines if User Losses and Resets Game //
    if(guesses < 1){
        losses++;
        document.getElementById("loseMusic").play();
        resetGuesses();
    }

    directionText.textContent = "",

// Results are passed to HTML //
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Tries Left: " + guesses;
    document.getElementById("wrongGuesses").innerHTML = "Not Psychic About: " + usedLetters;
}

// Theme Music //
window.onload=function() {
    document.getElementById("themeMusic").play();
}