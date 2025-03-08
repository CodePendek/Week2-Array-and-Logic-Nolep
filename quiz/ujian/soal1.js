function targetTerdekat(arr) {
  let O = 0
  let X = 0
  for( let i = 0; i < arr.length; i++ ){
    if( arr[i] === "o" ){
      O = arr.indexOf("o")
    }
  }
  for( let i = 0; i < arr.length; i++ ){
    if( arr[i] === "x" ){
      X = arr.indexOf("x")
    }
  }

  return `${O} ${X}`
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1