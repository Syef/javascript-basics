// we develop our programme (solutions) based on available values

// String
// Number
// Boolean
// undefined
// null

// object {key: value, key2 : value2 }
// Array [Value, Value2, Value3, {}, [], function() {} ]
// function (value, value2, value3, ...) {}

// function add (a,b,c) {
// return a+b+c;
//  }

// console.log(add(1,2,3));
function add(x) {
    return function (y) {
    return function (z) {
    return x+y+z;    
    }    
  }
}
var singleresult = add(58)(58)(12);
console.log(singleresult);

function multiply(x,y,z){
    return x*y*z
};

var result = multiply(5,2,8);
console.log(result);

console.log(`Executing return functions in one single`,
singleresult);
console.log(`Executing return functions in one single typeof`,
typeof singleresult);

var callOne = add(58);
console.log(`typeof callOne is`,
typeof callOne);
var callTwo = callOne(52);
console.log(`typeof callTwo is`,
typeof callTwo);
var result = callTwo(12);
console.log(`typeof result is`,
typeof result);

function welcome(name){
    return name;
};

function execute(param) {
    const value = param();
    return value;
}

console.log(welcome('syed hafeez'));
var details = welcome('hafeez');
console.log(`welcome sir ${details}`);

execute(()=>{});
execute(welcome);






