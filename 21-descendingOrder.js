//www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n) {
  let split = n.toString().split('')
  let arr = [];
  for(let i = 0; i < split.length; i++) {
    arr.push(parseInt(split[i]));
  }
  let sorting =  arr.sort((a, b) => {
    return b - a
  })
  return Number(sorting.join(""));
}

console.log(descendingOrder(1021));
