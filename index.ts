#! /usr/bin/env node

import inquirer from "inquirer";

// computer will generated a random number
// user input for guessing number
// compare user input with computer generated number and show result

const randomnumber = Math.floor(Math.random() * 6 + 1);

console.log(randomnumber);

const answer = await inquirer.prompt([{

    name : "userguessednumber" ,
    type : "number" ,
    message: "please guessed a number between 1-6 : " ,
},
]);

if(answer.userguessednumber === randomnumber){
    console.log("congratulations! you guessed right number.");

}else{
    console.log("you guessed wrong number");
};









