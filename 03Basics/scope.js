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

function one(){
    const username = "John"
    function two(){
        const website ="youtube"
        console.log(website);
    }
    console.log(username);
    two()
}
one()
