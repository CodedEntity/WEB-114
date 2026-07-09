// Bolla, Vishnu | 3 July 2026

'use strict';

// Prompt User Input
let favMonth = prompt("What is your favorite month?");

// Prevent errors if the user cancels the prompt
if (favMonth !== null) {

    favMonth = favMonth.toLowerCase();

    console.log("User Input (lowercase):", favMonth);
    console.log("Data Type:", typeof favMonth);

    // Switch case statements depending on the month
    switch (favMonth) {
        // Spring months
        case "march":
        case "april":
        case "may":
            console.log("Spring is nice with everything blooming.");
            alert("Spring is nice with everything blooming.");
            break;

        // Summer months
        case "june":
        case "july":
        case "august":
            console.log("You enjoy the summer months!");
            alert("You enjoy the summer months!");
            break;

        // Fall months
        case "september":
        case "october":
        case "november":
            console.log("Fall is fun with all of the pretty colors.");
            alert("Fall is fun with all of the pretty colors.");
            break;

        // Winter months
        case "december":
        case "january":
        case "february":
            console.log("You love the winter months!");
            alert("You love the winter months!");
            break;

        // Default case for invalid input
        default:
            console.log("Other months are interesting too!");
            alert("Other months are interesting too!");
            break;
    }
}
