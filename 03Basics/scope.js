// scopes
// let c = 50

// if(true){
// let a= 10
// const b = 20
// let c = 30
// console.log(c);
// }
// scope



// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "John"
//     function two(){
//         const website ="youtube"
//         console.log(website);
//     }
//     console.log(username);
//     two()
// }
// one()

// Nested Scopes
if(true){
    const username = "John"
    if (username === "John"){
        const channel = "Youtube"
        console.log(username+channel);
    }   
}

// ++++++++++Interesting ++++++

console.log(one(1));
function one(num){
    return num +1;

}


const two1 = function two(num1){
    return num1 + 1; 
}
console.log(two1(3));