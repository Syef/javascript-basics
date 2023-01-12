const friends = [
    'syed',     //0
    'hafeez',   //1
    'sameer',   //2
    'zakeer',   //3
    'shoyab'    //4
]
console.log(friends)
console.log(friends[0])

const index = 3;
console.log(friends[index]) // => friends[3]

console.log("access array value by static index");
console.log(friends[0] );
console.log(friends[1] );
console.log(friends[2] );
console.log(friends[3] );
console.log(friends[4] );

console.log("----------");
console.log("Access array value by using while loop");

let currentIndex = 0; // loop initial (starting) Point
const lastIndex = 4;
while(currentIndex <= lastIndex)
{ // loop condition
console.log(friends[ currentIndex ] );
currentIndex = currentIndex + 1;
// loop updating
}