function greetUser(username = 'UNKNOWN')
{
    console.log(`welcome
    ${username}!`);
}
greetUser();
greetUser('syed hafeez');

const welcomeUser = (username = 'Unknown User') => {
    return `Welcome to my page! ${username}`
}
const welcomeSyed =
welcomeUser('syed hafeez');
console.log(welcomesyed);