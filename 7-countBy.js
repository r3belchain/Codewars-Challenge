// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript


  const countBy = (x, n) => [...Array(n)].map((el, i) => (i + 1) * x);

  console.log(countBy(1,10))