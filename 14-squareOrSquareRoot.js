function squareOrSquareRoot(array) {
  let arr = [];
  for(let i = 0; i < array.length; i++) {
    let hitungKuadrat = Math.sqrt(array[i]);
    if(Number.isInteger(hitungKuadrat)) {
      arr.push(hitungKuadrat);
    } else {
      arr.push(array[i] * array[i]);
    }
  }
  return arr;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));