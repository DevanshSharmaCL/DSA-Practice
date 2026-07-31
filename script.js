const prompt = require("prompt-sync")();


// Question - 26 - Print All the factor of a Number


let n = 18

for (let i = 0 ; i<=n; i++){
    if(n%i==0){
        console.log(i)
    }
}