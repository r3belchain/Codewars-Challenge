// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str) {
  if(str.length === 0) {
    return str
  }

  let split = str.split(/[_-]/);  
  let result = ""
  for(let i = 0; i < split.length; i++) {
    if(split[i][0].toLowerCase() && i !== 0) {
      let hasil = ""
      hasil += split[i][0].toUpperCase() + split[i].slice(1);
      result += hasil
    } else {
      result += split[i]
    }
  }
  return result
}


console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("the_stealth_warrior"));