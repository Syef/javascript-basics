import readline from 'readline-sync'

const a = +readline.question('enter the price =');
let amount = a;

const flipkartshoping = function() {
    const gst = ()=> {
        return amount+20
    }
    const discount = ()=>{
        return 25
    }
    const total = gst() - discount()
    return total
};
const shoping = 
flipkartshoping(amount);
const gst = 20;
const discount = 25;
console.log(`bill details{
    net worth = ${amount},
    gst = ${gst},
    discount = ${discount}
}`);
