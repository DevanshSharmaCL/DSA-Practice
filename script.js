const prompt = require("prompt-sync")();


// Question - 31 - sum of digit 

let n = 1234
let numStr = n.toString().split('')
let sum = 0 

for(let i=0; i<numStr.length ; i++){
    console.log(numStr[i])
    // console.log(numStr)
    sum = sum + Number(numStr[i])
    console.log(sum)
    // numStr[i]= nums
}