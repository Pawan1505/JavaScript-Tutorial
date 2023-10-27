//singleton
//object literals

const mysym = Symbol("key1")
const jsUser = {
    name:"John",
    age:10,
    [mysym]:"mykey1",
    location:"NY",
    email:"john@xyz.com",
    lastLoginDays: ["Mon","Sat"]

}

// console.log(jsUser[mysym]);

// Object.freeze(jsUser);
jsUser.email="John@yahoo.com"
// console.log(jsUser);

jsUser.greet = function(){
    console.log(`Hello ${this.name}` );
}

console.log(jsUser.greet());