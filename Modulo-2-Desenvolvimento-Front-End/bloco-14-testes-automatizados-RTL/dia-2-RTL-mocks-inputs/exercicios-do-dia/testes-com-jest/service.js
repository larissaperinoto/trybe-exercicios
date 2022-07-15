generateNumber = () => (Math.random() * 101).toFixed(1);

upercaseString = (string) => string.toUpperCase();

firstLetter = (string) =>  string.split('')[0];

concatString = (stringOne, stringTwo) => `${stringOne}${stringTwo}`

module.exports = { generateNumber, upercaseString, firstLetter, concatString};