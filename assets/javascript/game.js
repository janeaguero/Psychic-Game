
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var lettersGuessed = [];
var letterToGuess = null;

var computerChoice = letters[Math.floor(Math.random() * letters.length)];



var changeGuessesLeft = function() {
	document.querySelector('#guessesLeft').innerHTML = 'Guesses left: ' + guessesLeft;	
};

var changeLetterToGuess = function() {
	this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

var changeLettersGuessed = function() {
	document.querySelector('#lettersGuessed').innerHTML = "Letters Previously Guessed: " + lettersGuessed.join(', ');
};

var reset = function() {
	totalGuesses = 10;
	guessesLeft = 10;
	lettersGuessed = [];

	changeLetterToGuess();
	changeGuessesLeft();
	changeLettersGuessed();
};

changeLetterToGuess();
changeGuessesLeft();



document.onkeypress = function(event) {
		guessesLeft--;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	lettersGuessed.push(userGuess);

	changeGuessesLeft();
	changeLettersGuessed();

	if(guessesLeft > 0) {
		if (userGuess == letterToGuess){
			wins++;
			document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
			alert ("You can indeed read my mind! You must be psychic.");
			reset();
		}
	} else if(guessesLeft == 0) {
		losses++;
		document.querySelector('#losses').innerHTML = "Losses: " + losses;
		alert ("Nope! You must be a normal human being. Try again.");
		reset();
	}
}



