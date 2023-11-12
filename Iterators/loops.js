// loops
//  for loops

// for (let i = 0; i <= 10; i++) {
//     if (i==5) {
//         console.log("5 is the best number" );
//     }
//     console.log(i);  
// }
// console.log("Out of loop");

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer loop value: ${i}`); 
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner Loop ${j} and inner loop ${i}`);    
//     } 
// }

// let myArr = ['flash','Superman','Batman','Shaktiman']

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }

// break and continue
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`${index} is best number`);
        // break;
        continue;
    }
    console.log(`value of index is ${index}`);
}