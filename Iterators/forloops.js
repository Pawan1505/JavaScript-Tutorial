// for of loops array specific loops

// console.log("Hello World");

// const arr=[1,2,3,4,5]
//  let stateCaptial = {
//     "Maharashtra":"Mumbai",
//     "UP":"Lucknow",
//     "Telangana":"Hydrebad"
// }
// // for of loop
// for (const [key,value] of stateCaptial) {
//     console.log(key,value);
// }

// Maps Concept
const map1 = new Map();
map1.set('Maharashtra','Mumbai')
map1.set('Goa','Panji')
// map1.set('Maharashtra','Mumbai')

// // console.log(map1);

// for (const [key,value] of map1) {
//     console.log(key,'->',value);
// }

for (const key in map1) {
    console.log(map1[key]);    
    }
