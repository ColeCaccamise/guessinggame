const startBtn = document.querySelector(".btn");
const playAgainBtn = document.querySelector(".playAgain");
const output = document.querySelector(".output");
const heading = document.querySelector(".heading");
const maxForm = document.querySelector(".maxForm");
const maxInput = document.querySelector(".maxInput");
const guessForm = document.querySelector(".guessForm");
const guessInput = document.querySelector(".guessInput");
const num = document.querySelector(".num");
const trophy = document.querySelector(".trophy");
const h1 = document.querySelector("h1");
const quit = document.querySelector(".quit");

const maxToggle = () => {
  startBtn.classList.toggle("hide");
  heading.classList.toggle("hide");
  maxForm.classList.toggle("hide");
  h1.classList.toggle("hide");
};

const max = (e) => {
  e.preventDefault();
  let max = maxInput.value;
  max = Math.floor(max);
  heading.innerText = "Choose a max number";

  if (isNaN(max)) {
    heading.innerText = "Choose a max NUMBER";
  }

  if (!isNaN(max)) {
    console.log(max);
    let answer = Math.floor(Math.random() * max + 1);
    let numTries = 1; // calculate for game over text
    console.log(answer);

    guessForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let guess = guessInput.value;
      console.log(guess);
      guessInput.value = "";
      if (guess == answer && numTries == 1) {
        heading.innerHTML = "You won! Congrats!";
        num.innerText = `You guessed correctly in one try!!`;
        guessForm.classList.toggle("hide");
        playAgainBtn.classList.toggle("hide");
        trophy.classList.toggle("hide");
        quit.classList.toggle("hide");
      } else if (guess == answer) {
        heading.innerText = "You won! Congrats!";
        num.innerText = `You guessed correctly in ${numTries} tries`;
        guessForm.classList.toggle("hide");
        playAgainBtn.classList.toggle("hide");
        trophy.classList.toggle("hide");
        quit.classList.toggle("hide");
      } else if (guess > answer) {
        numTries++;
        heading.innerText = "Guess lower!";
      } else {
        numTries++;
        heading.innerText = "Guess higher!";
      }
    });
  }

  maxInput.value = "";

  heading.innerText = `Guess a number 1 - ${max}`;
  maxForm.classList.toggle("hide");
  guessForm.classList.toggle("hide");
};

// start game
maxToggle();
maxForm.addEventListener("submit", max);
playAgainBtn.addEventListener("click", () => {
  window.location.href = "#";
});
