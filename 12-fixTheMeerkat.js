//www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript
 function fixTheMeerkat(arr) {
  return [arr[arr.length - 1], arr[1], arr[0]];
}

console.log(fixTheMeerkat(["tail", "body", "head"]));
