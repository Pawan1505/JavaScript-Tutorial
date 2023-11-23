const myNums=[1,2,3,4,5,6,7]

// let newNum = myNums.map( (num) => num+10)

let newNum = myNums.map( (num) => num+10).map( (num) => num + 1 )

// console.log(newNum);

const muNum1 = [1,2,3]

const myTotal = muNum1.reduce(function (acc , currval) {
    console.log(`acc: ${acc}and currval: ${currval}`);
    return acc + currval;
},0)

console.log(myTotal);

