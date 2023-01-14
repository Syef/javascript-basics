const SchoolFriends = [
    'syed',
    'hafeez',
    'sameer',
    'zakeer',
    'shoyab'
];

const CollegeFriends = [
    'asif',
    'ashraf',
    'imran',
    'aftab',
    'arshad'
];

console.log(SchoolFriends);
console.log(CollegeFriends);

let friends = (SchoolFriends)+(CollegeFriends);

friends.concat(...CollegeFriends,...SchoolFriends);
console.log(friends);


