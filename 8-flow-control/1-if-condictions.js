// ticket bookings
import readline from 'readline-sync';
//const readline = require('readline-sync');

const CURRENT_AVAILABLE_TICKETS = 10;
console.log(`Current available tickets are =
${CURRENT_AVAILABLE_TICKETS}`);

const numberTicketsRequired = 15;
//15 <=10
const canBuyTickets =
numberTicketRequired <=
CURRENT_AVAILABLE_TICKETS;

//1.can buyTickets -> true ->
// you're tickets are confirmed
// 2. can buyTickets -> false ->
// tickets are not available

let message = '';

if(canBuyTickets){
    message = `you're tickets are confirmed`
} else{
    message =`Ticket are not available`
}

console.log(message)