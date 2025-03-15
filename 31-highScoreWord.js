// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
  let split = x.split(' ');
  let arr = [];
  let obj = {}
  for(let i = 0; i < split.length; i++) {
    let count = 0
    for(let j = 0; j < split[i].length; j++) {
      let numberAlphabet = split[i][j].charCodeAt(0) - "a".charCodeAt(0) + 1;
      count += numberAlphabet
    }
    arr.push(count)
    obj[split[i]] = count
  }

  for(let key in obj) {
    if(obj[key] === Math.max(...arr)) {
      return key
    }
  }
}


console.log(high("what time are we climbing up the volcano"));