function genderBased(gender){
    if (gender === 'M'||gender === 'm'||gender === 'Male'||gender === 'male'){
        console.log("hello sir")
    }else if(gender === 'F'||gender === 'f'||gender === 'Female'||gender === 'female'){
        console.log("hello maam")
    }else{
        console.log("not a gender")
    }
}genderBased("femal")