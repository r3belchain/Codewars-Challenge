// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(inter) {
  console.log(inter);
  for (let i = 0; i < inter.length; i++) {
    let count = 0; 
    for (let j = 0; j < inter.length; j++) {
      if (Math.abs(inter[i] % 2) === Math.abs(inter[j] % 2) && i !== j) {
        count++;
        break;
      }
    }
    if (count === 0) {
      return inter[i];
    }
  }
}

console.log(findOutlier([1, 2, 3]));
