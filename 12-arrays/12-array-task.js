var friends = ['sYed', 'ZakeEr', 'hUSSaiN'];
// ['Syed', 'Zakeer', 'Hussain'];
var friendsName = friends.map( friend => friend.toLowerCase());


var capitalize = friendsName.map(friends => {
    const firstLetter = friends[0].toUpperCase();
    const remainingLetters = friends.substring(1);
    return firstLetter + remainingLetters
});

console.log(friends);
console.log(friendsName);
console.log(capitalize);

// [ 'syed', 'zakeer', 'hussain'];