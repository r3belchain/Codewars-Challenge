// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// function findOdd(A) {
//   //happy coding!
//   let sorted = A.sort((a, b) => {
//     return a - b;
//   });
//   for(let i = 0; i < sorted.length; i++) {
//     let count = 0
//     for(let j = 0; j < sorted.length; j++) {
//       if(sorted[i] === sorted[j]) {
//         count++
//       }
//     }
//     if(count % 2 !== 0) {
//       return sorted[i]
//     }
//   }
// }


// Alternarive Solution
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);



console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // should return 4  
