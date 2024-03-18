// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num){
    return [...Array(num)].map((el, i) => `${i+1} sheep...`).join(" ")
  }


  console.log(countSheep(3));