const readline = require('readline-sync');

console.log("Sum of Two Numbers");

const a = +readline.question('please enter the value of a: ');
const b = +readline.question('please enter the value of b: ');
console.log(`value of ${a} is ${typeof a}`);
console.log(`value of ${b} is ${typeof b}`);
const sum = a*b;

console.log(`sum of ${a} multyply ${b} = ${sum}`);