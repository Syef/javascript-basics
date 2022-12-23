import readline from 'readline-sync';

const firstValue =
readline.question(`please enter the value of a = `);
const secondValue =
number(readline.question(`please enter the value of b =`));

function maths(valueOne, valueTwo)
{
    console.log(`value of a is
    ${valueOne}`);
    console.log(`value of b is
    ${valueTwo}`);

    const addition = valueOne+ valueTwo;
    const subtraction = valueOne - valueTwo;
    const multiply = valueOne * valueTwo;
    const division = valueOne /valueTwo;
    const modulo = valueOne % valueTwo;

    console.log(`Addition of ${ValueOne} and ${valueTwo} is ${addition}`);
    console.log(`subtraction of ${ValueOne} and ${valueTwo} is ${subtraction}`);
    console.log(`multiply  of ${ValueOne} and ${valueTwo} is ${multiply }`);
    console.log(`division  of ${ValueOne} and ${valueTwo} is ${division }`);
    console.log(`modulo of ${ValueOne} and ${valueTwo} is ${modulo}`);

    }
    maths(firstValue, secondValue);
    