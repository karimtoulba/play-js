/* 
File: Play4.js
Author: Karim Toulba
Date: 28/07/2024
*/

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


