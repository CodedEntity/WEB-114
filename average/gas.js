// Bolla, Vishnu | 12 July 2026

"use strict";

let entryCount = 0;
let gasTotal = 0;

console.log("Enter Your Name:");
const username = prompt("Enter Your Name:");
console.log(username);

if (username === null) {
    console.log("You cancelled the name prompt.");
    alert("You cancelled the name prompt.");
}

else if (username.trim() === "") {
    console.log("You must type a name.");
    alert("You must type a name.");
}

else {
    let gasBillAvg = calcGasAvg();

    if (gasBillAvg === null) {
        console.log("You cancelled entering gas totals.");
        alert("You cancelled entering gas totals.");
    }
    
    else if (entryCount === 0) {
        console.log("No gas totals were entered.");
        alert("No gas totals were entered.");
    }
    
    else {
        if (entryCount === 1) {
            const message = `${username}, your gas total is $${gasTotal.toFixed(2)}.`;
            console.log(message);
            alert(message);
        }
        
        else {
            const message = `${username}, your average weekly gas bill is $${gasBillAvg.toFixed(2)}.`;
            console.log(message);
            alert(message);
        }
    }

    if (entryCount == 0) {
        console.log("No gas totals were entered.");
        alert("No gas totals were entered.");
    }
    
    else if (entryCount == 1) {
        console.log("You entered 1 gas total.");
        alert("You entered 1 gas total.");
    }
    
    else {
        console.log(`You entered ${entryCount} gas totals.`);
        alert(`You entered ${entryCount} gas totals.`);
    }
}

function calcGasAvg() {
    console.log("Enter your first week's gas total. Enter -1 when done.");
    let input = prompt("Enter your first week's gas total. Enter -1 when done.");
    console.log(input);

    if (input === null) {
        return null;
    }

    let weeklyGas = parseFloat(input);

    while (weeklyGas != -1) {
        if (isNaN(weeklyGas)) {
            console.log("Please enter a valid number");
            alert("Please enter a valid number");

            console.log("Enter your week's gas total again. Enter -1 when done.");
            input = prompt("Enter your week's gas total again. Enter -1 when done.");
            console.log(input);

            if (input === null) {
                return null;
            }
            weeklyGas = parseFloat(input);
            continue;
        }
        
        else {
            gasTotal += weeklyGas;
            entryCount++;

            console.log("Enter your next week's gas total. Enter -1 when done.");
            input = prompt("Enter your next week's gas total. Enter -1 when done.");
            console.log(input);

            if (input === null) {
                return null;
            }
            weeklyGas = parseFloat(input);
        }
    }

    let average = 0;
    if (entryCount > 0) {
        average = gasTotal / entryCount;
    }
    
    else {
        average = 0;
    }

    return average;
}