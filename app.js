const play = document.querySelector(".playBtn");
const reset = document.querySelector(".reset");
const form = document.querySelector(".form");
const maxForm = document.querySelector(".max");
const maxVal = document.querySelector(".maxNum");
const maxBtn = document.querySelector(".maxBtn");
const formBtn = document.querySelector(".formBtn");
const maxMessage = document.querySelector(".maxMessage");
const maxMsg = document.querySelector(".maxMsg");
const input = document.querySelector(".guess");
const message = document.querySelector(".message");

let guess;
let max;
let random;
let tries = 0;

play.addEventListener("click", function (e) {
  play.classList.add("hidden");
  maxForm.classList.remove("hidden");
  maxBtn.classList.remove("hidden");
});

maxForm.addEventListener("submit", function (e) {
  e.preventDefault();
  maxMessage.classList.add("hidden");
  if (maxVal.value > 999999999) {
    message.classList.remove("hidden");
    message.textContent = "max number can't be more than 9 digits";
    setTimeout(function () {
      message.classList.add("hidden");
    }, 1500);
  } else if (maxVal.value > 1) {
    max = Math.trunc(maxVal.value);
    maxVal.value = "";
    generate(max);
    maxForm.classList.add("hidden");
    maxBtn.classList.add("hidden");
    form.classList.remove("hidden");
    formBtn.classList.remove("hidden");
    maxMessage.classList.remove("hidden");
    maxMsg.textContent = max;
    input.classList.remove("hidden");
  } else {
    message.classList.toggle("hidden");
    message.textContent = "max number must be greater than 1";
    setTimeout(function () {
      message.classList.toggle("hidden");
    }, 1500);
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  guess = input.value;
  input.value = "";
  check();
});

reset.addEventListener("click", function () {
  maxForm.classList.remove("hidden");
  maxBtn.classList.remove("hidden");
  message.classList.add("hidden");
  maxMessage.classList.add("hidden");
  reset.classList.add("hidden");
  form.classList.add("hidden");
  tries = 0;
  guess = null;
  max = null;
  document.querySelector("h1").textContent = "Guessing Game!";
  message.style.color = "red";
});

const generate = function (max) {
  random = Math.trunc(Math.random() * max + 1);
};

const check = function () {
  if (guess == random) {
    tries++;
    document.querySelector("h1").textContent = "Congratulations!";
    message.style.color = "black";
    message.classList.remove("hidden");
    message.textContent = `You guessed correctly in ${tries} tries`;
    maxMessage.classList.add("hidden");
    formBtn.classList.add("hidden");
    input.classList.add("hidden");
    reset.classList.remove("hidden");
    message.classList.remove("hidden");
  } else if (guess > random) {
    message.classList.remove("hidden");
    maxMessage.textContent = "too high!";
    tries++;
    message.classList.add("hidden");
  } else if (guess < random) {
    message.classList.remove("hidden");
    maxMessage.textContent = "too low!";
    tries++;
    message.classList.add("hidden");
  }
};
