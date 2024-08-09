// Printing date based on the current server time (Date)
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

console.log(`${day} - ${month} - ${year}`);
