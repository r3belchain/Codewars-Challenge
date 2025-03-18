// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
function solution(input, markers) {
  return input
    .split("\n") 
    .map((line) => {

      for (let marker of markers) {

        const index = line.indexOf(marker);
        if (index !== -1) {

          line = line.substring(0, index);
        }
      }

      return line.trimEnd();
    })
    .join("\n"); 
}


console.log(solution('aa + bb\ncc - dd\nee * ff', ['+', '-', '*']))

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
console.log(result); // Output: "apples, pears\ngrapes\nbananas"