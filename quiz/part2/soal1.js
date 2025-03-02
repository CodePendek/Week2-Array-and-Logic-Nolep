function palindrome(kata){
  let word = kata.split("")
  let reverse = kata.split("").reverse()

  return String(word) === String(reverse)
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false