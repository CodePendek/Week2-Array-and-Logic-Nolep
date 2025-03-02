function angkaPalindrome(num) {
  let toString = String(num)
  let reverse = toString.split("").reverse().join("")
  
  let isTrue = toString === reverse
  num += 1
  while(true){
    return isTrue
    num++
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

// Puyeng dikit