const compoundInterest = (p,r,t)=>{
    const finalResult = p * Math.pow(1+r/100,t)
    const interestEarned = finalResult-p
    console.log(interestEarned)
}
compoundInterest(1000,5,3)