const prompt = require("prompt-sync")();


// Question - 25 - Sum of Even And Odd Seperately 

let n = 10;
let even = 0; 
let odd = 0;

for(let i=0;i<=n;i++){
    (i%2==0)? even+=i:odd+=i
    console.log(even,odd)   
}