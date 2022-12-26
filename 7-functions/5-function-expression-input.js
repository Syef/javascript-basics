//Expression function is value or expression 
//by assigning an anonymous function to a variable parameter.

import readline from 'readline-sync';
import chalk from 'chalk';

const calculateBill = function(mealAmount,taxRate,tip) {
    const total = Number(mealAmount) +
    Number(taxRate) + Number(tip);
    return total;
}
const customerMealAmount =
readline.question("please enter mealAmount: ");
const taxRate = 
readline.question("what is the TaxRate: ");
const tipValue = 
readline.question("any tip amount ?: ");

const totalBill =
calculateBill(customerMealAmount, taxRate, tipValue);

console.log(
    chalk.bgRed("Total BillAmount:") + 
    chalk.bgGreen(TotalBill)
);


