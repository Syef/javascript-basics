//creating simple javascript object

const user = {
    firstname: 'syed',
    lastname: 'hafeez',
    work: 'sap',
    city: 'guntur',
    wfh: true,
    skills: ['html','css','ja'],
    company: {
        name: 'ui dev',
        location: 'hyderabad'
    },

    details: function() {
        console.log(`User Details: syed hafeez`);
    }

}

console.log(user);
console.log('Data type of variable user is ${typeof user}');

//How to access object properties (keys)
//1. Dot Notation  '.'
// 2.Brackets Notation '[]'

//Dot Notation '.'
Object.propertyName
console.log(`User City info:
${user.city}`);

//Brackets Notation '[]` ->
object['propertyName']
console.log(`user city info via brackets notation user['city'] = ${user['city']}`);

//Accessing nested object properties -> '.' or '[]'
const companyLocation = 
user.company.location;
console.log(`companylocation by dot notation =${companyLocation}`);

const companyLoc = user['company']
['location'];
console.log(`Company Location by bracket notation =${companyLoc}`)

const skills = user.skills;
console.log(skills);

user.details()
