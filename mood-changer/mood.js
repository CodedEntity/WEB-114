// Bolla, Vishnu | 15 July 2026
"use strict";

// Select Elements
const moodTitle = document.querySelector("#mood-title");
const quoteDisplay = document.querySelector("#quote");
const buttonsContainer = document.querySelector("#buttons-container"); 

// Create Data Object
const moods = {
  happy: { 
    name: "Happy", 
    bg: '#FFD700',   // Radiant Intense Gold
    text: '#4B0082', // Deep Royal Indigo/Violet
    message: "Everything feels bright and fun!" 
  },
  calm: { 
    name: "Calm", 
    bg: '#008080',   // Deep Meditative Teal
    text: '#F5F5DC', // Soft Serene Beige/Sand
    message: 'Take a deep breath. Everything is okay.' 
  },
  angry: { 
    name: "Angry", 
    bg: '#FF0000',   // Pure Aggressive Crimson Red
    text: '#111111', // Heavy Aggressive Charcoal Black
    message: 'Sometimes the steam needs to blow off. Take a breath!' 
  },
  sleepy: { 
    name: "Sleepy", 
    bg: '#1A0F2E',   // Dark Midnight Cosmic Violet
    text: '#D6C7FF', // Soft Luminous Dreamland Lavender
    message: 'Time to recharge. Drift off to dreamland.' 
  }
};

// Create the function that changes the page information
function changeMood(moodName) {
  const mood = moods[moodName];
  
  if (!mood) return;

  // Update Page
  document.body.style.backgroundColor = mood.bg;
  document.body.style.color = mood.text;
  quoteDisplay.textContent = mood.message;
  moodTitle.textContent = mood.name;

  console.log("Mood selected:", moodName);
  console.log("Mood settings:", mood);
}

// Event Handler
function handleHappyClick() { changeMood("happy"); }
function handleCalmClick() { changeMood("calm"); }
function handleAngryClick() { changeMood("angry"); }
function handleSleepyClick() { changeMood("sleepy"); }

// Event Listener
buttonsContainer.addEventListener("click", function(event) {
  if (event.target.id === "happy-btn") handleHappyClick();
  if (event.target.id === "calm-btn") handleCalmClick();
  if (event.target.id === "angry-btn") handleAngryClick();
  if (event.target.id === "sleepy-btn") handleSleepyClick();
});