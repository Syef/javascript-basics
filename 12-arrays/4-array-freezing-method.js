let Data=[
    123,
    'hafeez',
    true,
    [56,99,897,668],
    {a: 1,b: 2,c:3,d:4}
];

Object.freeze= Data;
console.log(Data);

console.log

// we can modified the data of array and object because it was not freezed

Data[4] =125;
console.log(Data);