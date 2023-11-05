// const user = {
//     username: "John",
//     price: 99,
//     welcomemessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)
//     }
// }

// // user.welcomemessage()
// // user.username="Sam"
// // user.welcomemessage()

// function chai(){
//     const user1 = "John"
//     console.log(this.user1);
// }

// chai()


// Arrow Functions

const chai= () => {
    let user1 = "John"
    console.log(this.user1);
}

// chai()

// const addtwo = (n1,n2) => {
//     return n1+n2;
// }
// simplicit function
// const addtwo = (n1,n2) => n1+n2;
// const addtwo = (n1,n2) => (n1+n2);
const addtwo = (n1,n2) => ({username: "John"});
console.log(addtwo(3,7));
