// foreach loop
const language = ['js','cpp','java','ruby','switch']

// language.forEach( function (item){
//     console.log(item);
//  } )

// language.forEach( (val1,index,arr) => {
//     console.log(val1,index,arr);
// })

language1 = [{
    lanaguageName:"JS"
},
{
    lanaguageName:"Py"
},
{
    lanaguageName:"Java"
}]

language1.forEach( (value) => {
    console.log(value.lanaguageName);
});