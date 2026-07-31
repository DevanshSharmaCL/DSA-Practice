const prompt = require("prompt-sync")();


// Question - 27 - Sum of all the Factor


let n = 6 
let sum = 0
for (let i = 0 ; i<=6; i++){
    if(n%i==0){
        sum += i 
        console.log(sum)
    }
}