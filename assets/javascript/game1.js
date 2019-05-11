var lettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = letter[Math.floor(Math.random() * letter.length)];
var guess;
var tries = 10;
var correct = false;
var wins = 0;
var losses = 0;

document.onkeypress = function(event)
{
    guess = event.key;

    if((guess === randomLetter)&&(tries > 0))
    {
        wins++;
        tries = 10;

    }
    else if ((guess !== randomLetter) && (tries > 0))
    {
        tries--;
    }
    else
    {
        losses++;
        tries = 10;
    }
}