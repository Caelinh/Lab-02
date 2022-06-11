'use strict';

let tally = 0;
let userName = prompt("What is your name?");
alert(`Welcome to my site ${userName}.`);
alert("I'm going to ask you a few questions that may or may not tell you about me. Give it your best guess!");

function checkAnswer(){
    while (answer ==! 'Y' && answer ==! 'N'){
        answer = prompt("Please enter y or n").toUpperCase();
    }
}
//Question 1
let answer = prompt("I am 29 years old and I'm from Canada. Y or N").toUpperCase();//first question
checkAnswer();
//User outcome
console.log(answer);
if (answer != "N") {
    alert("Incorrect!")
} else {
    alert("You're correct!");
    tally = tally + 1
}


//Question 2
answer = prompt("I attended Texas Tech University for a degree in computer science. Y or N").toUpperCase();
checkAnswer();
//User outcome
if (answer != "Y") {
    alert("Incorrect!")
} else {
    alert("You're correct!");
    tally = tally + 1
}


//Question 3
answer = prompt("I have a certification in music production. Y or N").toUpperCase();
checkAnswer()
//User outcome
if (answer != "Y") {
    alert("Incorrect!")
} else {
    alert("You're correct!");
    tally = tally + 1
}


//Question 4
answer = prompt("I ride horses on the weekends. Y or N").toUpperCase();
checkAnswer()
//User outcome
if (answer != "N") {
    alert("Incorrect!")
} else {
    alert("You're correct!");
    tally = tally + 1
}


//Question 5
answer = prompt("I've visited over 15 countries. Y or N").toUpperCase();
checkAnswer()
//user outcome
if (answer != "Y") {
    alert("Incorrect!")
} else {
    alert("You're correct!");
    tally = tally + 1
}

//Question 6
let Q6 = prompt("Guess a number between 1 and 20");
if (Q6 == 11) {
    alert("You got it!")
    tally = tally + 1;
} else {
    for (let i = 4; i >= 0; i--) {//Guess counter
        if (Q6 == 11) {
            alert("You got it!");
            tally = tally + 1;
            break;
        } else if (i == 0) {
            alert("All out of guesses! The answer was 11")
            break;
        
        } else if (Q6 < 11) {
            Q6 = prompt("Too low! Guess a number between 1 and 20. " + i + " Guesses remaining.");
        
        } else if (Q6 > 11) {
            Q6 = prompt("Too high! Guess a number between 1 and 20. " + i + " Guesses remaining.");
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




