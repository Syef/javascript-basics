import chalk from 'chalk';
import readline from 'readline-sync';

const GreenLight = 'green';
const RedLight = 'red';
const YellowLight = 'yellow';

var user input =
readline.question('please enter the colour =');
var userinput = 
userinput.toLocaleLowerCase();
console.log(`the value of color is ${userinput}`);

if (userinput === GreenLight) {
    console.log(chalk.bgGreen('Go....'))
}else if (userinput ===RedLight){
    console.log(chalk.bgRed('stop....'))
}else if(userinput === YellowLight){
    console,log(chalk.bgGray("UserInput should be
    'red','green','yellow' "));
};