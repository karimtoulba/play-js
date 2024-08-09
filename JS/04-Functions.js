/* 
File name: play5.js / High Order Functions
Author: Karim Toulba
Date: 30/07/2024
*/

// forEach => returns a new array after applying the same to all items
let myCities = ['Cairo', 'Alexandria', 'Aswan'];
myCities.forEach(
  function (item) {
    console.log(`I want to go to ${item}`);
  }
);

// map => Returns a new array after modification
let myNumbers = [1, 2, 3, 4, 5];
const newNumbers = myNumbers.map(
  function (number) {
    return number*10;
  }
);

// filter => Returns a new array with only certain values as requested
let myCities = ['Cairo', 'Alexandria', 'Aswan'];
const newCities = myCities.filter(
  function (city) {
    return city.length > 7;
  }
);

//findIndex => Return the index of array item as requested
let myCities = ['Cairo', 'Alexandria', 'Aswan'];
const foundIndex = myCities.findIndex(
  function (city) {
    if (city[0] === 'C') {
      return city;
    }
  }
);

// reduce => method returns a single value after iterating through the elements of an array.
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(
  function (accumulator, currentValue) {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
  }, 10
);

console.log(newSum);

// Return Object in a Function
function myFunc(name, age, country) {
  return {
    name: name, 
    age: age, 
    country: country,
  }
}

console.log(myFunc("Karim", 19, "Egypt"));

