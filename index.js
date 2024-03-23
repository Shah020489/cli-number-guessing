#! /usr/bin/env node
import inquirer from 'inquirer';
//1) computer will generate a random number --Done
//2) user will guess the number 
//3) compare user input with computer generated number and show result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1 to 6",
    },
]);
console.log(answer);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulation ! you guess the right number");
}
else {
    console.log("You guess a wrong number");
}
