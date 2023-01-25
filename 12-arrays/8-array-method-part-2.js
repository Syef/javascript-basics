const students = []

// Add value to array (below code will add value as a last item in array)
const value_return_from_push = students.push('syed');
console.log(value_return_from_push);

students[students.length] = 'Hafeez';
console.log(students);

//Add value at the begining of array 
const count = students.unshift('sameer');
console.log(students);
console.log(count);

const old_students = ['ashra','zakeer','shoyab'];

// merge multiple array with .concat() method
const all_students = students.concat(old_students);
console.log(students);
console.log(old_students);
console.log(all_students);

//convert array values to string with sepatator by using .joint()
const students_joined = all_students.join();
console.log(students_joined);
console.log(typeof students_joined);

const joined_with_slash = all_students.join(" && ")
console.log(joined_with_slash);

//     0       1           2      3        4        5
// ['syed', 'hafeez', 'sameer','ashraf','shoyab''zakeer']
const first_two_students = all_students.slice(0,2); // ['syed','sameer']
const java_students = all_students.slice(2,5); // ['sameer','ashraf','shoyab']
const last_three_students = all_students.slice(3); //['ashraf','shoyab','zakeer']


const users = [
    "raju",
    "rajesh",
    "ramesh",
    "pradeep",
    "khan",
    "pathan",
    "shorav",
    "shaid",
    "shajir",
    "nazeer",
    "arshad",
    "aftab",
    "haris",
    "ramu",
    "kavi",
    "khajur",
    "ram",
    "charan",
];

const totalUsers = users.length;
console.log(`Total member of users ${totalUsers}`);

const last_ten_users = users.slice(-10);
console.log(last_ten_users);

console.log(all_students);

//     0       1           2      3        4        5
// ['syed', 'hafeez', 'sameer','ashraf','shoyab''zakeer']
// find 'ashraf values index in array
const indexValueOfashraf = all_students.indexOf('ashraf'); //3
console.log(indexValueOfashraf);

console.log(all_students.indexOf('Ashraf')); // -1 because ashraf and Ashraf both are diffrence

console.log(all_students.indexOf('syed')); 

//                0   1   2   3   4   5  6    7   8
const letters = ['a','b','c','z','y','x','a','z','m'];
console.log( letters.indexOf('a')); // 0
console.log( letters.indexOf('z')); // 3
console.log( letters.lastIndexOf('a')); // 6
console.log( letters.lastIndexOf('c')); // 2
console.log( letters.lastIndexOf('C')); // -1

// Remove values from array (these methods will modify original array);
// .shift()  // return removed value
// .pop()  // return removed value
// .splice()  // return removed array of values

console.log(all_students);
const first_student = all_students.shift();

console.log(first_student);
console.log(all_students)

const last_student = all_students.pop(); 
console.log(last_student);
console.log(all_students); //[ 'syed', 'Hafeez', 'ashra', 'zakeer' ]

const delate_students = all_students.splice(2, 1); // ['apsar'];
console.log(delate_students);
console.log(all_students); // [ 'syed', 'Hafeez', 'zakeer' ]
