'use strict';

let tally = 0;
let userName = prompt("What is your name?");
alert(`Welcome to my site ${userName}.`);
alert("I'm going to ask you a few questions that may or may not tell you about me. Give it your best guess!");

function checkAnswer(questionNumber){
    while (questionNumber ==! 'Y' && questionNumber ==! 'N'){
        questionNumber = prompt("Please enter y or n").toUpperCase();
    }
}
//Question 1
let Q1 = prompt("I am 29 years old and I'm from Canada. Y or N").toUpperCase();//first question
checkAnswer(Q1);
//User outcome
if (Q1 == "Y") {
    alert("Incorrect!")
} else {
    alert("You're correct!");
    tally = tally + 1
}
//console.log(`Age and Homestate: ${Q1}`);//logging to console


//Question 2
let Q2 = prompt("I attended Texas Tech University for a degree in computer science. Y or N").toUpperCase();
//User outcome
if (Q2 == "N") {
    alert("Incorrect!")
} else {
    alert("You're correct!");
    tally = tally + 1
}

//console.log(`College: ${Q2}`);//logging to console

//Question 3
let Q3 = prompt("I have a certification in music production. Y or N").toUpperCase();
//User outcome
if (Q3 == "N") {
    alert("Incorrect!")
} else {
    alert("You're correct!");
    tally = tally + 1
}
//console.log(`Music Production: ${Q3}`);//logging to console

//Question 4
let Q4 = prompt("I ride horses on the weekends. Y or N").toUpperCase();
//User outcome
if (Q4 == "Y") {
    alert("Incorrect!")
} else {
    alert("You're correct!");
    tally = tally + 1
}
//console.log(`Cowboy: ${Q4}`);//logging to console

//Question 5
let Q5 = prompt("I've visited over 15 countries. Y or N").toUpperCase();
//checking correct input
// if (Q5 !== "Y" || Q5 !== "N") {
//     Q5 = prompt("Please input either a Y or N").toUpperCase();
// }
//User outcome
if (Q5 == "N") {
    alert("Incorrect!")
} else {
    alert("You're correct!");
    tally = tally + 1
}
//console.log(`Traveling: ${Q5}`);//logging to console

//Question 6
let Q6 = prompt("Guess a number between 1 and 20");
if (Q6 == 11) {
    alert("You got it!")
    tally = tally + 1;
} else {
    for (let i = 3; i >= 0; i--) {//Guess counter
        if (i == 0) {
            alert("All out of guesses! The answer was 11")
            break;
        } else if (Q6 < 11) {
            Q6 = prompt("Too low! Guess a number between 1 and 20. " + i + " Guesses remaining.");
            // console.log(i);
        } else if (Q6 > 11) {
            Q6 = prompt("Too high! Guess a number between 1 and 20. " + i + " Guesses remaining.");
            // console.log(i);
        } else if (Q6 == 11) {
            alert("You got it!");
            tally = tally + 1;
            break;
        }

    }
}
    // Question 7
    const countries = ["JAPAN", "NETHERLANDS", "UNITED KINGDOM", "IRELAND", "BELGIUM", "SPAIN", "FRANCE", "ITALY", "CZECH REPUBLIC", "GREECE"];
    let countryLen = countries.length;
    let Q7 = prompt("What is one of my top 10 countries to visit?");
    Q7 = Q7.toUpperCase();
    let found = false;
    let attempts = 5;

    while (attempts > 0 && !found) {
        for (let i = 0; i < countryLen; i++) {//loop comparing question entry to all the answers in array
            let compare = countries[i].toString();
            // console.log(compare);
            // console.log(Q7);
            if (Q7 == compare) {
                alert("You guessed one! Nice Job!");
                found = true;//escape from loop if correct answer is guessed.
                tally = tally + 1;
                break;
            }
        }
        if (found == false) {
            Q7 = prompt(`Wrong answer. Please try again. ${attempts} attempts remain.`).toUpperCase();
            attempts = attempts - 1//loop to create attempt limit
        }
    }
    if (attempts == 0) {
        alert(`All out of guesses! Better luck next time ${userName}.`);
    }




