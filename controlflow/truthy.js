const userEmail = "john.ai"

if(userEmail){
    console.log("Got User Email");
}
else{
    console.log("Dont have user email");
}
/* falsy value 
false ,0 ,-0,BigInt,"",NaN,undefined,0n

---------------

truthy value
array , "0",'false'," ",[],{},function(){}
*/

const arrayName = []

if (arrayName.length === 0) {
    console.log('Empty Array');
}

const myObj = {}

if (Object.keys(myObj).length === 0) {
    console.log('EMPTY Object');
}
// Nullish Coalescing Operator

let val1;
val1 = undefined ?? 15
console.log(val1);

// Terniary Operator

// condition ? true : false

const Tea = 100
Tea <=80 ? console.log("less than 80"):console.log("more than 80");

