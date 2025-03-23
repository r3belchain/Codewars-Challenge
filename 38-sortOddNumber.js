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


console.log(sortArray([5, 3, 2, 8, 1, 4]));