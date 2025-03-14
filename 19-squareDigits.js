function squareDigits(num) {
  if(num === 0) return 0;
  let split = num.toString().split('')
  let newArray = [];
  for(let i = 0; i < split.length; i++) {
    let digit = Number(split[i])
    newArray.push(digit * digit)
  }
  return parseInt(newArray.join(''))
}

console.log(squareDigits(2112));
