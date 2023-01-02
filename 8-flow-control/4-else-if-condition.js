import readline from 'readline-sync';
import chalk from 'chalk';

const pizza = ['Margerita Piazza' , 'Paneer Pizza' ,
'Chicken Pizza']
const Pasta = ['Pasta in White Sauce', 'Pasta in Red Sauce'];
const Burger = ['veg-Burger','Chicken Burger','cheese Burger'];

const foodItems = [Pizza,Pasta,Burger];
console.log(foodItems);

console.log(`Welcome to Cafe Lounge`);

const que = readline.question(`what to u want from the menu
1. Pizza
2. Pasta 
3. Burger`)
console.log(que);

const Pizza =
readline.keyInSelect(Pizza);
// console.log (pizza);

const Pasta =
readline.keyInSelect(Pasta);
// console.log (pasta);
const Burger =
readline.keyInSelect(Burger);
// console.log (Burger);

if (foodItems==Pizza){

    console.log(pizza);
} else if (foodItems==Pasta){

    console.log(Pasta);
} else if (foodItems==Burger){
    
    console.log(Burger);
}

