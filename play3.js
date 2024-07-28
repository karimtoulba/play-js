/* 
File: play3.js
Author: Karim Toulba
Date: 28/07/2024
*/

// Global Scope Variables - can be used everywhere
let satellite = 'The Moon'; // Global Scope var
let galaxy = 'The Milky Way'; // Global Scope var
let stars = 'North Star'; // Global Scope var

function callMyNightSky () {
  return `Night Sky: ${satellite}, ${galaxy}, and ${stars}.`;
}

console.log(callMyNightSky());

