// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      total+= arr[i];
    } 
  }
  return total;
}

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
