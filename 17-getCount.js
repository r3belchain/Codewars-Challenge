function getCount(str) {
  let total = 0;
  let vowel = ['a', 'i', 'u', 'e', 'o']
  for(let i = 0; i < str.length; i++) {
    if(vowel.includes(str[i])) {
      total += 1
    }
  }
  return total;  // returns 3 for input "hello world"
}

console.log(getCount("hello world")); // should return 3