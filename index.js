//generate a random number between 1-100
const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessSubmit = document.getElementById("guessSubmit");
const guessField = document.getElementById("guessField");
const message = document.querySelector(".message");

let guessCount = 0;

guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
    const userGuess = parseInt(guessField.value);
    guessCount++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${guessCount} guesses!`;
        message.style.color = "green";
        endGame();
    } else if (guessCount === 10) {
        message.textContent = `Game over! The correct number was ${randomNumber}.`;
        message.style.color = "red";
        endGame();
    } else {
        message.textContent = `Wrong guess. Try Again! ${guessCount}`;
        message.style.color = "red";
    }

    guessField.value = "";
    guessField.focus();
}

function endGame(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
}
