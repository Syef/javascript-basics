const friends = [
    'syed',     // 0
    'hafeez',   // 1
    'sameer',   // 2
    'zakeer',   // 3
    'shoyab',   // 4
    'adil',     // 5
    'ashraf',   // 6
    'aftab'     // 7
];

const totalFriend = friends.length; // 8
console.log(`Total friends length is ${friends.length}`)

// initial;  condition updation

for(let index = 0; index < totalFriend; index = index + 1) {
console.log(`Current friend is ${friends[index]} is at index of ${index}`)
}
