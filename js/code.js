'use strict';

let userName = prompt("What is your name?");
alert(`Welcome to my site ${userName}.`);
alert("I'm going to ask you a few questions that may or may not tell you about me. Give it your best guess!");

//Question 1
let Q1 = prompt("I am 29 years old and I'm from Canada. Y or N").toUpperCase();//first question
    //User outcome
    if (Q1 == "Y") {
        alert("Incorrect!")
    } else alert("You're correct!");
    //console.log(`Age and Homestate: ${Q1}`);//logging to console


//Question 2
let Q2 = prompt("I attended Texas Tech University for a degree in computer science. Y or N").toUpperCase();
    //User outcome
    if (Q2 == "N") {
        alert("Incorrect!")
    } else alert("You're correct!");
    //console.log(`College: ${Q2}`);//logging to console

//Question 3
let Q3 = prompt("I have a certification in music production. Y or N").toUpperCase();
    //User outcome
    if (Q3 == "N") {
        alert("Incorrect!")
    } else alert("You're correct!");
    //console.log(`Music Production: ${Q3}`);//logging to console

//Question 4
let Q4 = prompt("I ride horses on the weekends. Y or N").toUpperCase();
    //User outcome
    if (Q4 == "Y") {
        alert("Incorrect!")
    } else alert("You're correct!");
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
    } else alert("You're correct!");
    //console.log(`Traveling: ${Q5}`);//logging to console

document.getElementById("userName").innerHTML = userName;
