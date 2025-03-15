function findUniq(arr) {
  // do magic
  let obj = {}
  for(let i = 0; i < arr.length; i++) {
    if(!obj[arr[i]]) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }
     for(const key in obj) {
      if(obj[key] === 1) {
        return Number(key);
      }
    }
}

// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] == arr[1] ? arr.pop() : arr[0];
// }


console.log(findUniq([1, 0, 0]));