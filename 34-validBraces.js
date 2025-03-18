//www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

function validBraces(braces) {
  const stack = [];
  const pairs = { "(": ")", "[": "]", "{": "}" };

  for (let char of braces) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      const lastOpen = stack.pop(); 
      if (pairs[lastOpen] !== char) {

        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(validBraces('(){}[]'))
// console.log(validBraces("([{}])"));
console.log(validBraces("((())])"));
