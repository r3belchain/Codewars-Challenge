// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

// function moveZeros(arr) {
//   let target = 0;
//   let count = 0

//   let newArr = arr.filter((num) => num !== target)
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === target) {
//       count++
//     }
//   }
//   for(let i = 0; i < count; i++) {
//     newArr.push(target)
//   }
//   return newArr;
// }


//! Alternative Solution:

var moveZeros = function (arr) {
  return arr
    .filter(function (x) {        //buat array yang bukan merupakan 0
      return x !== 0;
    })
    .concat(                      // lakukan concat / penggabungan dengan array.... selanjutnya
      arr.filter(function (x) {   // jika 0 ditemukan sebanyak n, maka lakukan penggabungan / concat
        return x === 0;
      })
    );
};


console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));