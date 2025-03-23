function isValidWalk(walk) {
  //insert brilliant code here
  if(walk.length !== 10) {
    return false
  }

  let obj = {n: 0, s: 0, e: 0, w: 0}
  for(let i = 0; i < walk.length; i++) {
       obj[walk[i]] = (obj[walk[i]] || 0) + 1;
  }

  return obj['n'] === obj['s'] && obj['e'] === obj['w']
}

console.log(isValidWalk(['n','s','n','s','e','w','e','w','n','s'])); // true 
console.log(isValidWalk(['n','n','n','s','e','w','e','w','n','s'])); // false 
console.log(isValidWalk(['n','s','e','w'])); // false 
