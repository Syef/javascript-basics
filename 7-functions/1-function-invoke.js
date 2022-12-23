console.log("my functions");
console.log(56*69);
console.log(true===false);

var a = 20; //number
let b = "12"; //string
const c = false; //boolean

console.log(a+b+c);


const user = {
    firstName: "syed",
    lastName: "hafeez",
    company: "infosis",
    city: "hyderabad"
}
const friends = ['zakeer','sameer','firoz'];

const syed = {
    firstName: "syed",
    lastName: "hafeez",
    company: "sap",
    city: "guntur"
}

var name = "syed";

function
createUserDetails(userFirstName,lastName,companyName,cityName){
    const user = {
        firstName:userFirstName,
        lastName: lastName,
        company: companyName,
        city: cityName
    }
    return user;
}

const salary = 10000
const hike = salary + 5000;

const newUser =
createUserDetails('syed','hafeez','sap','hyderabad');
console.log(newUser);

