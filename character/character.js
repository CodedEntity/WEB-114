// Bolla, Vishnu 06|21|2026
`use strict`;

alert(`Welcome to the Floating Sky City, Let me be your guide:
                Time to Create Your Adventurer!`); 

const charName = prompt(`Give your character a name!`, `Wanderer`); 
const charCompanion = prompt(`What type of pet or companion does ${charName} have?`); 
const charSuperpower = prompt(`What superpower does ${charName} have?`); 
const charYearsTraining = prompt(`How many years has ${charName} been training? (Enter a Number)`); 

const trainingYearsText = charYearsTraining; 
const trainingYearsNumber = parseInt(trainingYearsText); 

console.log(trainingYearsText, typeof trainingYearsText); 
console.log(trainingYearsNumber, typeof trainingYearsNumber); 

const powerLevel = trainingYearsText * 10; 

// Try it / think about it: Before converting, what would trainingYearsText * 10 produce if trainingYearsText is the string "5"?
// Javascript automatically converts the string to a number during multiplication.
// What about if the visitor types a non-numeric value like "five"? Test both and note what happens. You will need this information for the reflection.
// Javascript cannot convert text to a number, resulting in "Not a Number" (NaN).

const fightsMonsters = confirm(`Does ${charName} like fighting monsters? 
Click OK for YES 
Click Cancel for NO`); 

console.log(fightsMonsters, typeof fightsMonsters); 

alert(`Assembling a Profile for ${charName}... almost ready!`); 

alert(`************************************************** 
Name: ${charName} 
Pet: ${charCompanion} 
Superpower: ${charSuperpower} 
Power Level: ${powerLevel} 
Monster Fighter? ${fightsMonsters ? `Yes` : `No`} 
**************************************************
In the Floating Sky City, 
${charName} soars on the back of a mighty ${charCompanion}, 
wielding the incredible power of ${charSuperpower}! 
After ${trainingYearsNumber} years of training, 
${charName} is ready for any adventure that awaits. 
**************************************************`); 