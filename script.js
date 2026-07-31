const prompt = require("prompt-sync")();


// Question - 30 - Print Each Digit of a number

let num = 456 
let numStr = num.toString().split('');
console.log(numStr)

for(let i = 0 ; i <numStr.length; i++){
    console.log(numStr[i])
}