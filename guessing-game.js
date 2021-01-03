// timeout so that html loads before prompts show up
setTimeout(function () {
  //ask for max
  let max = prompt("please type a max number");
  max = Math.floor(max);
  // if max isnt a number, keep asking until it is
  while (!max) {
    max = prompt("please type a max NUMBER");
    max = Math.floor(max);
  }
  // generate random number answer
  let answer = Math.floor(Math.random() * max + 1);

  let guess = prompt(`guess a number 1 - ${max}`);
  let numTries = 1; // calculate for game over text
  let didQuit = false;

  // loop over guess until it is correct
  while (guess) {
    if (guess == answer) {
      break;
    } else if (guess === "Q" || guess === "q") {
      didQuit = true;
      break;
    } else if (guess > answer) {
      numTries++;
      guess = prompt(`guess lower!`);
    } else {
      numTries++;
      guess = prompt(`guess higher!`);
    }
  }

  // game over text

  if (didQuit) {
    alert("you quit the game. better luck next time!");
  } else if (numTries == 1) {
    alert("you guessed correctly in one try! great job!");
  } else {
    alert(`you guessed correctly in ${numTries} tries! great job!`);
  }
}, 200);
