// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
function snail(array) {
  if (array.length === 0 || array[0].length === 0) return []; 

  const result = [];
  let topRow = 0,
    bottomRow = array.length - 1,
    leftCol = 0,
    rightCol = array[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    for (let i = leftCol; i <= rightCol; i++) {
      result.push(array[topRow][i]);
    }
    topRow++;

    for (let i = topRow; i <= bottomRow; i++) {
      result.push(array[i][rightCol]);
    }
    rightCol--;

    if (topRow <= bottomRow) {
      for (let i = rightCol; i >= leftCol; i--) {
        result.push(array[bottomRow][i]);
      }
      bottomRow--;
    }

    if (leftCol <= rightCol) {
      for (let i = bottomRow; i >= topRow; i--) {
        result.push(array[i][leftCol]);
      }
      leftCol++;
    }
  }

  return result;
}

// Test cases
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(
  snail([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ])
); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(snail([[]])); // [] (empty matrix)
