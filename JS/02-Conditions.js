/*
File Name: Play2.js
Author: Karim Toulba
Date: 27/07/2024
*/

// If Else Statement - True or False Variable
// True value: "String", true, 
// False value: Empty string " ", false, 0, undefined
let sale = true;
sale = false;
if (sale) {
  console.log('Time to buy');
} else {
  console.log('Time to wait for a sale');
}

// Comparison Operators: >, <, <=, >=, ===, !==
// Logical Operators: AND &&, OR ||, not !
let mood = 'sleepy';
let tirednessLevel = 6;
if (!mood === 'sleepy' && !tirednessLevel > 5) {
  console.log('time to sleep');
} else {
  console.log('not time to go to bed');
}

// Truthy and Falsy Assignment
// VAR = ANOTHER VAR OR VALUE (If ANOTHER VAR is false)
let username = '';
let defaultUsername = username || 'Stranger';
if (username) {
  console.log(`Hello, ${username}`);
} else {
  console.log(`Hello, ${defaultUsername}`);
}

// Ternary Operator 1
let myTime = true;
myTime ? console.log() // notice: there is no closing ;
: console.log();

// Ternary Operator 2
let favoriteAnimal = 'Die Katze';
favoriteAnimal === 'Die Katze' ? console.log()
: console.log();

// If.. Else If.. Else
let stopLight = 'yellow';
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

// The Switch Keyword
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place': console.log('You get the gold medal!');
  break;
  case 'second place': console.log('You get the silver medal!');
  break;
  case 'third place': console.log('You get the bronze medal!');
  break;
  default: console.log('No medal awarded.');
  break;
}

// Functions (Function Declaration)
let myName = 'Karim'; // Global scope variable can be used everywhere
function sayThanks(name = 'Stranger') { // In case there is no value when calling the function
  console.log(`Thanks for your purchase, ${name}`);
}
sayThanks('Karim'); // name equals Karim, prints Karim
sayThanks(); // name equals undefined, prints Stranger

// Functions with Return AND Helper Function in use 
function monitorCount(rows, columns) {
  return rows*columns;
}
function monitorCost(rows, columns) {
  return (monitorCount(rows, columns)*200);
}
const totalCost = monitorCost(5, 4)
console.log(totalCost);

// Arrows functions - const var = function (Function Expression)
const var = function(rows, columns) {} // regular function
const var = () => {} // function with no parameters
const var = (rows, columns) => {} // function with two parameters
const var = rows => {} // function with one parameter
var(rows); // calling the function
const var = height => height*height; // instead of return for single line

// For Loop - FORWARD
for (let counter = 5; counter <= 10; counter++) {
  console.log(counter);
}

// For Loop - BACKGROUND
for (let counter = 5; counter >= 0; counter--) {
  console.log(counter);
}

// For Loop - ARRAY
let myCities = ['Amsterdam', 'Berlin', 'Oslo'];
for (let i = 0; i < myCities.length; i++) {
  console.log(myCities[i]);
}

// Nested For Loop
let oneNames = ['Ahmed', 'Karim', 'Hussein', 'Tarek'];
let twoNames = ['Ahmed', 'Ali', 'Ismail', 'Karim'];
let hiNames = [];

for (let i = 0; i < oneNames.length; i++) {
  for (let j= 0; j < twoNames.length; j++) {
    if (oneNames[i] === twoNames[j]) {
      hiNames.push(oneNames[i]);
    }
  }
}

console.log(hiNames);

// While Loop
let counter = 0;
while (counter < 5) {
  console.log('');
  counter++;
}

// Do While 
let counter = 0;
do {
  console.log(''); 
  counter++;
} while (counter < 5);

// Break
for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === 'Notorious B.I.G.') {
    console.log(rapperArray[i]);
    break;
  }
  console.log(rapperArray[i]);
}
console.log('And if you don\'t know, now you know.');

// Functions as Data
const newFunction = oldFunction; // rename the function
newFunction(); // call the old function with the new name
console.log(newFunction.name); // retreive the name of the original old function

