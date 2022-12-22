import chalk from "chalk";

console.log("Hi");
console.log("hey!");
console.log(chalk.blue("hello"));
console.log(chalk.bgRed("javascript"));

function myOwnFunction() {
    console.log("one");
    console.log("two");
    console.log("three");
}
myOwnFunction();

function addition 
(firstValue , secondValue)
{

    console.log("addition of the two numbers");
    console.log(chalk.bgRed(firstValue));
    console.log(chalk.bgYellow(secondValue));
    const output = firstValue + secondValue;

    console.log(chalk.white(output));
}    
    
addition(60 , 56);

function subtraction
(firstValue , secondValue)
{
    console.log("subtraction of the two numbers");
    console.log(chalk.bgMagenta(firstValue));
    console.log(chalk.bgCyan(secondValue));

    const output = 
    firstValue - secondValue;

    console.log(chalk.white(output));

}

    subtraction (88,277);