// for of loops array specific loops

console.log("Hello World");

const arr=[1,2,3,4,5]
let stateCaptial = {
    "Maharashtra":"Mumbai",
    "UP":"Lucknow",
    "Telangana":"Hydrebad"
}
// for of loop
for (const num of stateCaptial) {
    console.log(`${stateCaptial[num]}`);
}

