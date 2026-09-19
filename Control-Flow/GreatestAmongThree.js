function greatest(a, b, c) {
  const max = a>b?(a>c?a:c):(b>c?b:c)
  console.log(`${max} is bigger`)
}
greatest(20,8,10)
