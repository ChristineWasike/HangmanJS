
// Pick a random word

// The source of our secret word

// All words in the array should be in lowercase
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

// We use Math.random and Math.floor to pick out a random word from the array of words.
var word = words[Math.floor(Math.random() * words.length)];

// Take the player's guess

// Create empty array and fill it up with underscores matching the number of letters in selected word.
var answerArray = [];

//This loops through the word selected and add the underscores to the empty array
// The loop starts from the first letter(index 0) but does not include the word.length value;
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
    // Game code goes here
    // Show the player their progress
    alert(answerArray.join(" "));
    // The space character acts as a separator for the underscores

    // Take input from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing");
    // When a user presses cancel
    if (guess == null) {
        break; // Immediately stops the loop

        // Checks to see that only one letter has been typed
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.")
    } {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }

        }
    }

    // The end of the game loop
}

// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);



// Update the array with underscores and remainLetters for every correct letter
// Quit the game if the player wants to
// Check that the player has guessed
// Show the player their progress
// Finish when the player has guessed the word
