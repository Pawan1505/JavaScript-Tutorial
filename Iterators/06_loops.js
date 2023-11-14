// for each loops
// for eachdoesnt return any value

const myNums = [1,2,3,4,5,6]
console.log(myNums);
// const newNum = myNums.filter( (num) => {
//     return num > 4 })
// console.log(newNum);

// const newNum = []
// myNums.forEach( (items) => {
//     if (items > 3) {
//         newNum.push(items)
//     }
// } )

// console.log(newNum);


let cars=[
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
  ]

  let myCar = cars.filter( (items) => items.type == "station wagon" )

  console.log(myCar);

