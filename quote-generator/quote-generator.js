// Bolla, Vishnu | 23 July 2026

const motivationalQuotes = [
    { text: "If you can change your mind, you can change your life.", author: "William James" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "Change the world by being yourself.", author: "Amy Poehler" },
];

let lastIndexValue = -1;

function randomQuote() {
    // Generating a random integer in a range.
    let calculatedIndex = Math.floor(Math.random() * motivationalQuotes.length);
    
    // Check if the index value matches the index of the quote in the list.
    if (calculatedIndex === lastIndexValue) {
        calculatedIndex = (calculatedIndex + 1) % motivationalQuotes.length;
    }
    
    lastIndexValue = calculatedIndex;
    
    const selectedQuote = motivationalQuotes[calculatedIndex];
    
    // Changing HTML through Javascript
    document.getElementById("quote").textContent = `"${selectedQuote.text}"`;
    document.getElementById("author").textContent = `- ${selectedQuote.author}`;
}
// Changing style through Javascript
// Code (Second Event)

document.getElementById("quotebtn").addEventListener("click", randomQuote);

document.getElementById("themeBtn").addEventListener("click", ); // For Second Event Unfinished)

/*
Has a list of three quotes, assigns the quotes a random number to generate one after another in a random order.
Changes HTML for Quote and Author, I counldn't recall how to go about it when specifically for changing style.
*/