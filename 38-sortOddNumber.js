function sortArray(array) {
  // Return a sorted array.
  let newArr = []
  for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 !== 0) {
        newArr.push(array[i])
      }
  }
  newArr.sort((a, b) => {
    return a - b
  })

  let countIndex = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
      array[i] = newArr[countIndex]
      countIndex++
    }
  }
  

  return array
}

// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//   return array.map((x) => (x % 2 ? odd.shift() : x));
// }





console.log(sortArray([5, 3, 2, 8, 1, 4]));