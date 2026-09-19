function voterElegible(name,age){
    const validAge = 18
    if(age>=validAge){
        console.log(`hello ${name} you are elegible for vote `)
    }else{
        console.log(`hello ${name} u still have ${validAge-age} to vote`)
    }
}
voterElegible("devansh",18)