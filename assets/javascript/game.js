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