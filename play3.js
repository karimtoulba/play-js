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

// Block Scope Variables - cannot be used everywhere, only in the function determined
function logVisibleLightWaves () {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}
logVisibleLightWaves(); // prints Moonlight.
console.log(lightWaves); // Error as the variable is block scope.

// Array
let shoppingList = ['Wasser', 'Brot', 'Milch', 'Kase'];
console.log(shoppingList[0]); // prints Wasser
console.log(shoppingList[2]); // prints Milch
