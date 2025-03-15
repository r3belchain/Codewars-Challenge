//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
function duplicateEncode(word) {
  let lowerSplit = word.toLowerCase().split('');
  let obj = {};
  let result = '';
  for(let i = 0; i < lowerSplit.length; i++) {
    if(!obj[lowerSplit[i]]) {
      obj[lowerSplit[i]] = 1;
    } else {
      obj[lowerSplit[i]]++;
    }
  }

  for(let i = 0; i < lowerSplit.length; i++) {
    if(Object.hasOwn(obj, lowerSplit[i])) {
      if(obj[lowerSplit[i]] > 1) {
        result += ')';
      } else {
        result += '(';
      }
    }
  }
  return result
}


console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));