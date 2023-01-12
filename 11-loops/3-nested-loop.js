// Nested

const tableNumber = 3;
let startNumber = 1;
const endNumber = 10;

while(startNumber <= endNumber) {
    // 1 <= 10 => true
    // statement
    console.log(`${tableNumber} x ${startNumber} = ${tableNumber * 
        startNumber}`);
        startNumber++; //startNumber = startNumber + 1; 
}
//after loop complete startNumber value is 11; // 11 <=  10 => false
console.log(`End of loop - startNumber value is ${startNumber}`);


let startTable = 1;
let endTable = 10;

while(startTable <= endTable) {
    console.log(`CurrentTable is ${startTable}`);
let startNumber = 1;
const endNumber = 10;
while(startNumber <= endNumber) {
    console.log(`${startTable} x ${startNumber} = ${startTable * startNumber}`); 
    startNumber++;
}
 console.log("------------") 
 startTable++;  
}