// Arrays
const marvelH = ["Ironman","Thor"]
const dcH= ["Batman","Superman"]

// let b = [...marvelH,...dcH]
// console.log(b);

let b = [1,2,3,[4,5],6,[6,7]]

let c= b.flat(Infinity)

console.log(c);
console.log(Array.isArray("JohnCena"));
console.log(Array.from("JohnCena"));
let score1=100,score2=200,score3=300

console.log(Array.of(score1,score2,score3));
