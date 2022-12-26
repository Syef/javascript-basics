const add = (a,b) => {
    return a + b;
}

const sumof2plus8 = add();
console.log(`sum of 2 plus 8 is ${sumof2plus8}`);

const addWithDefault = (a = 0, b= 0) => {
    return a + b;
}
const sumof10plus80 = addWithDefault();
console.log(`sum of 100 plus 80 is ${`Sumof10plus80`}`);