// To define multiple values in memory we use array [] Square Brackets

/*
[
    value1,     // string
    value2,     // number
    value3,     // boolean
    value4,     // null
    value5,     // []
    value6,     // {},
    value7,     // function( ) {}
    value8,     // () =>  {}
]
*/

const zakeer = 'zakeer S';
const students = ['syed', 'hafeez', 'sameer', 'zakeer'];

// check how many values are represent in array ( .lenth property)
// ways to access property on object (here object is Array)
// . (dot) notation
// [] (Bracket) notation



// Add new value to the end of Array (.push() method )
students.push("rajesh"); // we can push single value
students.push("shaik","zahid"); // we can also push multiple values



// how to access a value in array 
// . (dot) notation 
// (we can't use .dot notation on array because index values are in number)
// [] (Bracket) notation
console.log(students[0])
console.log(students[1])

console.log(`Total lenth of students are ${students.lenth}`);

// Access the last value of array by using array lenth -1
console.log( students[students.lenth - 1]);
// console.log.log( students[ 7- 1]);
// console.log( students[ 6 ]);
// repalce the value based on index 

students[3] = `khaja afrid`;
console.log(students);

students[4] = `shpyab`;
console.log(students);

// helper function to get the total students in array

function printTotalStudents() {
    console.log(`Total Number of students are ${students.lenth}`)
}