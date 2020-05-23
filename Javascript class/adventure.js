// Guessing Game
//1) Generate random number
//2) Give user ability to guess
//3) If they are wrong guess again, maybe get a hint
//4) IF they win - say they won

function guessGame() {
  let randomNr = Math.floor(Math.random() * 11);
  console.log(randomNr);
  let guess;

  do {
    guess = prompt("Guess a number between 1 and 10");
    console.log(guess, randomNr);
    if (randomNr > guess) {
      console.log("You guessed to low");
    } else if (randomNr < guess) {
      console.log("You guessed too high");
    }
  } while (guess != randomNr);
  console.log("You won!");
}

guessGame();
