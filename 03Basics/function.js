// functions



// function sayMyName(){
//     console.log("Hello Man");
//     console.log("Hello John");
// }
// sayMyName()

// function add(a,b){
//     let result = a+b;
//     return result;
// }
// const add1 = add(1,10);
// console.log(add1);

function calculateCartPrice(...num1){//rest/spread operator
    return num1;
}

// console.log(calculateCartPrice(200,200,300));

const user ={
    username: "John",
    price: 199
}
function handleObject(anyobejct){
    console.log(`username is ${anyobejct.username} and price is ${anyobejct.price}`);
}

handleObject(user)