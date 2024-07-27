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
