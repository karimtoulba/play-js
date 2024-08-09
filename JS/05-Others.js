// Printing date based on the current server time (Date)
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

console.log(`${day} - ${month} - ${year}`);

// Change & Increment Date
date.setDate(date.getDate() + 1);
console.log(date); // prints current date +1 incremented.

// Message to display every 3 seconds
// stops after 10 seconds

function funEvery() {
  console.log('MESSAGE to display every 3 seconds');
}

myInterval = setInterval(funEvery, 3000);

function funStop() {
  clearInterval(myInterval);
  console.log('Stopped after 10 seconds');
}

setTimeout(funStop, 10000);
