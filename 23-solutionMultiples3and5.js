//www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number) {
  if(number <= 3 ) return 0;
  let arr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0) {
      arr.push(i);
    } else if (i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, num) => acc + num);
}

console.log(solution(10));
