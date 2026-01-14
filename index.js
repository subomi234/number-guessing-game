const minNum = 1;
const maxNum = 100;
const answer = Math.floor((Math.random() * (maxNum - minNum + 1) + minNum));

let attempts = 0;
let guess;
let running = true;

//come back and make this use html input instead of window prompt

while (running) {

    guess = Number(window.prompt(`Guess a number between ${minNum} and ${maxNum}`));

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    }
    else {
        attempts++;

        if (guess > answer) {
            window.alert("You guessed too high, try again!");
        }
        else if (guess < answer) {
            window.alert("You guessed too low, try again!");
        }
        else {
            window.alert("You guessed right, congratulations!!");
            running = false;
        }
    }

}