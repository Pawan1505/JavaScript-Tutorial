// IIFE to execute a function immediately
// ()() first parantheisis is for function and second paranthesis is for execution
// (function chai(){
//     console.log("DB connected");
// })()
(function code(){ //namediifi
    console.log("DB Connected");
})();

((name1) => {
    console.log(`Code 1 Execution ${name1}`);
})('John')
