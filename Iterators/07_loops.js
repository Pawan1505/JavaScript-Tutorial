const myNums=[1,2,3,4,5,6,7]

// let newNum = myNums.map( (num) => num+10)

let newNum = myNums.map( (num) => num+10).map( (num) => num + 1 )

console.log(newNum);