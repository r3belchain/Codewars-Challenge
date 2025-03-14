//www.codewars.com/kata/5264d2b162488dc400000001/train/javascript?

function spinWords(string) {
  let split = string.split(" ");
  let newArray = [];
  for (let i = 0; i < split.length; i++) {
    if (split[i].length >= 5) {
      let word = split[i].split("").reverse().join("");
      newArray.push(word);
    } else {
      newArray.push(split[i]);
    }
  }
  return newArray.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
