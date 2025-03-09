// https://www.codewars.com/kata/577a98a6ae28071780000989


// var min = function(list){
//     return list.sort((a, b) => a-b)[0]
// }

// var max = function(list){
//     return list.sort((a, b) => b-a)[0]
// }

const min = (list) => list.sort((a, b) => a-b)[0]
const max = (list) => list.sort((a, b) => b-a)[0]


console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]))

console.log(max([4,6,2,1,9,63,-134,566]));
console.log(max([4, 7, 6, 122]));