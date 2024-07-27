/* 
Name: New File play1.js
Author: Karim Toulba
Date: 27/07/2024
*/

// Print
console.log(); // Print command
console.log(99); // Print 99
console.log('Hello World!'); // Print Hello World!

// Arithmetic Operators
console.log(3.5 + 34); // plus / minus / multiply / divide
console.log(11 % 3); // modulus remaining

// String Concatenation
console.log('Hello' + 'World'); // Hello World
console.log('I love' + 'to code'); // I love to code
console.log('My name is' + ' ' + 'Karim'); // include a space

// Properties - (.) operator - (length) property to tell letters length
// Properties define the characteristic of an object
console.log('Hello'.length); // prints 5
console.log('Teaching the world how to code'.length);  // prints 30

// Methods - (.) operator - (toUpperCase) method - () 
// Method is an action to be applied on an object
console.log('Hello World!'.toUppercase()); // print HELLO WORLD!
console.log('My name is Karim'.startswith('H')); // print true as it starts with H
console.log('   Hello   '.trim()); // print Hello without whitespaces

// Built-in Objects with their own methods
console.log(Math.random() * 100); // prints a decimal number
console.log(Math.ceil(43.8)); // prints a number greater or equal to 43.8
console.log(Number.isInteger(2017)); // prints true or false if the number is integer
console.log(Math.floor(Math.random() * 100)); // prints a floor number

// var Variables
// Global access to use the variable
var myBirth = 1990;
var myName = 'Karim Toulba';
console.log('My name is' + ' ' + myName); // prints my name stored in variable

// let Variables
// Limited access to it's block & CAN BE CHANGED
let price; // assign value of undefined
console.log(price); // print undefined
let price = 350; // assign value of 350
console.log(price); // print 350

// const Variables
// Limited access to its block & CANNOT BE CHANGED
const entree = 'Enchiladas'; // assign value of const
console.log (entree); // print Enchiladas
entree = 'Tacos'; // trying to re-assign value
console.log (entree); // print ERROR
