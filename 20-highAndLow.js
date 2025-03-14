// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  let split = numbers.split(' ')
  let arr = [];
  for(let i = 0; i < split.length; i++) {
  arr.push(parseInt(split[i]))
  }
  let sorting = arr.sort((a, b) => {
    return b - a;
  })
  let max = sorting[0].toString()
  let min = sorting[arr.length - 1].toString()
  return (`${max} ${min}`)
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));