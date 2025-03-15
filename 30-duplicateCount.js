//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text) {
  let lowerSplit = text.toLowerCase().split('');
  let obj = {};
  let count = 0

  for(let i = 0; i < lowerSplit.length; i++) {
    if(!obj[lowerSplit[i]]) {
      obj[lowerSplit[i]] = 1;
    } else {
      obj[lowerSplit[i]]++;
    }
  }

  for(let key in obj) {
    if(obj[key] > 1) {
      count++;
    }
  }
  return count
}

console.log(duplicateCount("aabBcde")); //2
console.log(duplicateCount("Indivisibilities")); //2