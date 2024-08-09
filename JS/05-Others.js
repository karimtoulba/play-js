// Printing date based on the current server time (Date)
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

console.log(`${day} - ${month} - ${year}`);

// Change & Increment Date
date.setDate(date.getDate() + 1);
console.log(date); // prints current date +1 incremented.

// setTimeOut and setInterval
function every() { console.log('Executed every 3 seconds); }
function after() { console.log('Executed after 3 seconds); }

setTimeOut(after, 3000); // prints the message after 3 seconds.
setInterval(every, 3000); // prints the message every 3 seconds.
