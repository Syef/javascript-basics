/*
Here is normal if/else flow
if(condition){

} else {

}
*/
import readline from 'readline-sync';
const ticketAvailable = 20;

let message = '';

const userInput =
readline.question('No of required tickets');
/*
if (userInput <= ticketsAvailable)
{
    message = 'Tickets Booked'
} else {
    message = 'Ticket not booked'
}
*/
//condition ? trueBlock :
falseBlock
message = userInput <=
ticketsAvailable ? 'Tickets are booked' : 'Tickets are not Booked';

const condition = userInput <= ticketsAvailable;
const trueMessage = 'Tickets are Booked';
const falseMessage = 'Ticket are not Booked';

const anotherMessage = condition ?
trueMessage : falseMessage;

console.log(`Message value =
${message}`);
console.log(`Another Value = ${anotherMessage}`)