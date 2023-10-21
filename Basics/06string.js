//strings

const name = "John"
const repoCount=12

// console.log(name+repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation

const name1 = new String(" John1%20 ")
// console.log(name1.length);
// console.log(name1.toUpperCase());

console.log(name1.slice(0,3));
console.log(name1.replace("%20","2"));
