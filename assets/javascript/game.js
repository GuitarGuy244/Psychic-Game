//Array of possible computer choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var tries = 9;
var lettersGuessed = [];
var computerGuess = [];
var pcPrediction = letters[Math.floor(Math.random() * letters.length)];

window.onload = function() {
	computerGuess.push(pcPrediction);
}


//Game
document.onkeyup = function(event) 
{
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);

	if ((playerGuess === computerGuess[0]) && (tries > 0)) 
	{
		wins++;
		tries = 9;
		lettersGuessed.length = 0;
		computerGuess.length = 0;
		var pcPrediction = letters[Math.floor(Math.random() * letters.length)];
		computerGuess.push(pcPrediction);
	}

	else if ((playerGuess !== computerGuess[0]) && (tries > 0)) 
	{
		tries = tries-1;
	}

	else 
	{
		losses++;
		tries = 9;
		lettersGuessed.length = 0;
		computerGuess.length = 0;
		var pcPrediction = letters[Math.floor(Math.random() * letters.length)];
		computerGuess.push(pcPrediction);
	}

	document.getElementById("win").innerHTML = "Wins: " + wins;
	document.getElementById("loss").innerHTML = "Losses: " + losses;
	document.getElementById("remaining").innerHTML = "Guesses Left: " + tries;
	document.getElementById("soFar").innerHTML = "Your Guesses: " + lettersGuessed;
}