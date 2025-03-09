// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

function differenceInAges(ages) {
  ages.sort((a, b) => {
    return a - b;
  })
  return [ages[0], ages[ages.length -1], (ages[ages.length - 1] - ages[0])];
  }


console.log(differenceInAges([82, 15, 6, 38, 35]));