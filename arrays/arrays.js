const myExampleArray = ["String", "Another String", 11, 2, 8, 5, true, false];

console.log(myExampleArray);
// array function examples .filters, .sort, .includes, .map, .forEach, ect

// a. create new array consisting only of the strings in the array
// sort them alphabetically asscending (A-Z)

const aArray = myExampleArray.filter(x => typeof x === "string").sort((a,b) => a-b);

console.log(aArray)

// b. create new array consisting only of the numbers in the array
// sort them ascending.

const bArray = myExampleArray.filter(element => typeof element === 'number').sort((a,b) => a-b);
console.log(bArray)

// c. create a new array consisting only of the numbers in the array
// sort decending

const cArray = myExampleArray.filter(x => typeof x === "number").sort((a,b) => b-a);

console.log(cArray)

// d. create a new array consisting only of the strings in the array
// lowercase all the strings

const dArray = myExampleArray.filter(x => typeof x === "string").map(str => str.toLowerCase());

console.log(dArray)