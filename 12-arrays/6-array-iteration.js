const names = [
    "hafeez",   //0
    "syed",     //1
    "sameer",    //2
    "ashraf",
    "aftab",
    "arshad"
]
const namesLength = names.length //3

//console.log(`Welcome ${names[0]}`);
//console.log(`Welcome ${names[1]}`);
//console.log(`Welcome ${names[2]}`);

//iterating array values using LOOPS
let index = 0;
while (index < namesLength) {// while condition 3 < 3 => true
console.log(`Welcome ${names[index]}`); 
index++; // index = index + 1;
}

for (let i = 0; i < namesLength; i++){
 console.log(`Hey ${names[i]}`)
}
console.log(names);
console.log(typeof names); // typeof value always return "object"
// how to identify the value is Array or not ?
// by using Array.isArray(value) will true/false

console.log(Array.isArray(names));
console.log(Array.isArray("hafeez"));

//iterating Array values using Array.Method()
// [].Method()

// .forEach method
// [].forEach 
// "".forEach (X)
//{}.forEach (X)

function loopItems() { }

[].forEach(()  => {} );
[].forEach(function (){ });
[].forEach(loopItems)

// Looping array through forEach callbackFN
// ['syed', 'Hafeez', 'sameer']
//      0      1         2  
names.forEach(function (first,second,third){
    console.log("---------------------------")
    console.log("I am iterating through forEach Method");
    console.log(`First Param = `,first); // First Param always refers to VALUE in array
    console.log(`Second Param=`,second); // second param always refers to INDEX of VALUE
    console.log(`Third Param=`,third); // third param is original Array
});

let studentMarks = [56,88,52,63,32,75];
studentMarks.forEach((value) => {
    console.log(value)
});

studentMarks.forEach((value, index) =>{
    console.log(`Index = ${index} | Marks = ${value}`)
});

function iterateMarks(v, i, arr) {
    console.log(`Marks: ${v} at index of ${i}`);
}

studentMarks.forEach(iterateMarks)

const loop = function (value) {
    console.log(`Loop value ${value}`)
};

const numbers = [10, 20, 30];
numbers.forEach(loop)


