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
let myList = ['Wasser', 'Brot', 'Milch', 'Kase'];
console.log(shoppingList[0]); // prints Wasser
let arrLength = myList.length; // array length
let arrSlice = myList.slice(1,4); // slice from 1 to 4 index
let arrIndex = myList.indexOf('Brot'); // prints Index of an item
myList.pop(); // Remove LAST
myList.push('one', 'two'); // Add LAST
myList.unshift('new'); // Add FIRST
myList.shift(); // Remove FIRST
myList.sort(); // Sort Elements Alphabitically.

// Array with Functions
let myList = ['Wasser', 'Brot', 'Milch', 'Kase'];
function myChange(arr) {
  arr.pop();
}
myChange(myList);
console.log(myList);

// Changin and Updating Arrays
// const arrays, we can change items, but can't re-assign the array
const shoppingList = ['Wasser', 'Brot', 'Milch', 'Kase'];
shoppingList[0] = 'apfel'; // replace Wasser with Apfel
shoppingList = ['Orangensaft']; // ERROR , CANNOT RE-ASSIGN ARRAY WITH CONST

// let arrays, we can change items, we can re-assign the array
let shoppingList = ['Wasser', 'Brot', 'Milch', 'Kase'];
shoppingList[0] = 'apfel'; // replace Wasser with Apfel
shoppingList = ['Orangensaft']; // re-assign the array

// Nested Array
let numberClusters = [
  [1, 2], 
  [3, 4], 
  [5, 6]
];
console.log(numberClusters[1]);
const target = numberClusters[2][1];

// Objects
let myObjects = {
  'color' : 'red',
  'type' : 'turbo'
};

// Calling elements inside Objects
myObjects.color; // printing value using dot
myObjects.color = 'yellow'; // changing value using dot
delete myObjects.color; // deleting value using dot

myObjects.color = 'yellow'; // adding if not existing

myObjects['color']; // printing value using bracket notations 
myObjects['color'] = 'green'; // changing value using bracket notations
delete myObjects['color']; // deleting value using bracket notations

// Methods in Objects
const alienShip = {
  retreat() {
    console.log('We no longer wish to conquer your planet.');
  }, takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  } 
};

alienShip.retreat();
alienShip.takeOff();

