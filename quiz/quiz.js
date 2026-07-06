"use strict";

// Bolla, Vishnu 06|27|2026

/*
PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: What is my favorite language?
   - Variable name: favLanguage
   - Correct answer: japanese
   - Validation & Check: Use prompt(), trim whitespace, convert to lowercase, strict equality ===.

3. Question 2: What family of animals do I admire?
   - Variable name: favAnimalFamily
   - Correct answer: felidae
   - Validation & Check: Use prompt(), check if empty, strict equality === to check number.

   4. Question 3: What country do I wish to visit?
   - Variable name: dreamCountry
   - Correct answer: japan
   - Validation & Check: Use prompt(), trim whitespace, convert to lowercase, strict equality ===.

   5. Question 4: My favorite form of self-expression is writing, AND I dabble in drawing?
   - Variable name: selfExpression
   - Correct answer: true
   - Validation & Check: Convert to lowercase, use logical AND (&&) to verify both conditions, or check for negation (!).

6. Math: Calculate percentage with (score / totalQuestions) * 100

7. Final feedback logic (if / else if / else): 
   Logical operators I will use:
   - && to ensure both conditions in Question 4 are met.
   - ! (NOT) to validate that the user didn't leave the input blank.
*/

console.log("=== My Quiz Game ===");

// Initialize score
let score = 0;

// Define Number of Questions
let totalQuestions = 4;

// Question 1
let favLanguage = prompt("What is my favorite language?");
if (!favLanguage || favLanguage.trim() === "") {
    alert("Question 1 Was Left Unanswered");
}

else if (favLanguage.toLowerCase().trim() === "japanese") {
    score++;
    console.log("Question 1: Correct!");
}

else {
    console.log("Question 1: Incorrect.");
}

// Question 2
let favAnimalFamily = prompt("What family of animals do I admire?");
if (!favAnimalFamily || favAnimalFamily.trim() === "") {
    alert("Question 2 Was Left Unanswered.");
}

else if (favAnimalFamily.toLowerCase().trim() === "felidae") {
    score++;
    console.log("Question 2: Correct!");
}

else {
    console.log("Question 2: Incorrect.");
}

// Question 3
let dreamCountry = prompt("Name one of the two countries I plan to visit.");
if (!dreamCountry || dreamCountry.trim() === "") {
    alert("Question 3 Was Left Unanswered.");
}

else if (dreamCountry.toLowerCase().trim() === "japan" || dreamCountry.toLowerCase().trim() === "phillippines") {
    score++;
    console.log("Question 3: Correct!");
}

else {
    console.log("Question 3: Incorrect.");
}

// Question 4
let selfExpression = prompt("True or False: My favorite form of self-expression is writing, AND I dabble in drawing?");
if (!selfExpression || selfExpression.trim() === "") {
    alert("Question 4 Was Left Unanswered.");
}

else if (selfExpression.toLowerCase().trim() === "true") {
    score++;
    console.log("Question 4: Correct!");
}

else {
    console.log("Question 4: Incorrect.");
}

// Calculate Percentage
let percentage = (score / totalQuestions) * 100;

// Final Feedback (using if / else if / else and logical operators)
if (score === 4) {
    alert(`Wow! You scored ${score} out of 4! (${percentage}%). You know me perfectly!`);
}

else if (score === 3) {
    alert(`Great job! You scored ${score} out of 4! (${percentage}%). You know me really well.`);
}

else if (score === 2) {
    alert(`Good effort! You scored ${score} out of 4! (${percentage}%). You know me decently.`);
}

else if (score === 1) {
    alert(`You scored ${score} out of 4! (${percentage}%). Better luck next time!`);
}

else if (score === 0) {
    alert(`You scored ${score} out of 4! (${percentage}%). Looks like we need to catch up!`);
}

else {
    alert("Invalid score recorded.");
}

// Additional Feedback (on user's performance)
if (score === 4 && percentage === 100) {
    console.log("Feedback: Exceptional Performance!");
}

else if (score >= 2 && score < 4) {
    console.log(`Feedback: You scored either 50% or 75%. Keep at it!`);
}

else {
    console.log("Feedback: Better Luck Next Time...");
}

// Final summary (alert)
alert(`
                                        End of Quiz! 
                        Your Score: ${score}/${totalQuestions}  Percentage: ${percentage}%
    `);