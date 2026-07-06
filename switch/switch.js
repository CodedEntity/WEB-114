"use strict";

// Bolla, Vishnu | 3 July 2026

/* 
PLANNING / PSEUDOCODE
1. Prompt the user for their favorite month.
2. Convert the input to lowercase to ensure consistency.
3. Use a switch statement to group months by season.
4. Log the appropriate seasonal message to the console based on checkpoints.
5. Provide a fallback message for invalid inputs.
*/

// Step 1: Prompt User Input and convert to lowercase
let favMonth = prompt("What is your favorite month?");
favMonth = favMonth.toLowerCase();

// Step 2 & Checkpoints: Add switch case statements depending on the month
switch (favMonth) {
    // Spring months
    case "march":
    case "april":
    case "may":
        alert("Spring is nice with everything blooming.");
        break;

    // Summer months
    case "june":
    case "july":
    case "august":
        alert("You enjoy the summer months!");
        break;

    // Fall months
    case "september":
    case "october":
    case "november":
        alert("Fall is fun with all of the pretty colors.");
        break;

    // Winter months
    case "december":
    case "january":
    case "february":
        alert("You love the winter months!");
        break;

    // Default case for invalid input
    default:
        alert("Other months are interesting too!");
        break;
}