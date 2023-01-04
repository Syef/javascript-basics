/*
Comparision Operator (return boolean)
==
===
>=
>
<=
<
!=
!==
*/

// Logical operators AND , OR, NOT
//AND   -> &&
// OR   -> ||
// NOT  -> !

// 12 > 8 ==> TRUE
// 12 &&  ==> 8
// 12 || 8 ==>

// AND operator check all true values

console.log('AND OPERATORS true && true', true && true)
console.log('AND OPERATORS false && false', false && false)
console.log('AND OPERATORS true && false', true && false)
console.log('AND OPERATORS false && true', false && true)

// true && true =>
// 1. true -> true

// false && false =>
// 1.false

// true && false
// 1. true -> false

// false && true
// 1. false

console.log(true && true && true && true)

console.log(1 && 1 && 1 && 1)

console.log(10 > 3 && 5 < 2 && 1 <9 );

console.log(true && false && true)

import readline from 'readline-sync';

const userAge = 
readline.questionInt('Please enter your age');
const MIN_AGE = 18;
const MAX_AGE = 50:

if (userAge >=MIN_AGE && userAge
 <= MAX_AGE ) {
    console.log("You're are allowed...")
 } else {
    console.log(`You're are not allowed...`)
 }

 //OR Operation it only checks for single true
 console.log(true && true && true)
 console.log(true || true || true)

console.log( 45 < 35 || 100 !== 100);
console.log(false || false)
console.log("syed" || "hafeez");
console.log("" || "hafeez");

console.log("syed" && "hafeez");
console.log("" && "hafeez");

console.log(!true) // false
console.log(!false) // true

console.log(!0); // true
console.log(!78); // false
console.log(!"syed hafeez"); // false
console.log(!""); // true

console.log(!undefined); // true
console.log(!!undefined); // false

console.log(!!1); // true




