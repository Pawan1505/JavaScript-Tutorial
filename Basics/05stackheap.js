//Stack and Heap Memory
//stack (primitive)(copy), Heap (no-primitive)(reference)

// let myName = "John"
// let anotherName = myName
// anotherName = "Code"
// console.log(myName);
// console.log(anotherName);

let user1={
    email:"user1@yahoo.com"
}
let user2= user1
console.log(user2);

user2.email = "john@yahoo.com"

console.log(user2);
console.log(user1);