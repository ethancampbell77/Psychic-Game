// Psychic Game Javascript //

// Variable for Alphabet //
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables used to keep track of our wins, losses and ties //
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var usedLetters = [];

// Resets the Guess Counter to 10 attemps after a Win or Loss & Computer Chooses Letter at Random //
    
var resetGuesses = function() {
    guesses = 10;
    usedLetters = [];
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);

// Key Event //
    document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(event);

// Appending UserGuess to usedLetters Array above //
    usedLetters.push(event.key);

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

// Theme Music If for Chrome & Else for the rest of the browsers //
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
      $('#iframeAudio').remove()
    }
  else{
     $('#playAudio').remove() 


}
}

resetGuesses();