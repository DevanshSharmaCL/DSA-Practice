const areaOfTriangle = (s1,s2,s3)=>{
    const semiS = (s1+s2+s3)/2
    const area = Math.sqrt(semiS*(semiS-s1)*(semiS-s2)*(semiS-s3))
    console.log(area)
}

areaOfTriangle(5,7,9)