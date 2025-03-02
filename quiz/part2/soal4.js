function pasanganTerbesar(num) {
  let toString = num.toString()
  let res = ""
  for( let i = 0; i <= toString.length; i++ ){
    let slice = toString.slice(i, i + 2)
    if( slice > res )
      res = slice
  }
  return res
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99