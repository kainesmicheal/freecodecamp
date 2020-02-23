function rot13(str) { 
  // LBH QVQ VG!
  let values = {};
  for(let i=1,j=65;i<=26;i++,j++){
    values[String.fromCharCode(j)] = i;
  }
  let v = {};
  for(let i=1,j=65;i<=26;i++,j++){
    v[i] = String.fromCharCode(j);
  }
  
  let a = str.split("").map(val=>{let t = /[a-z]/i;
  let k = t.test(val);let rot = values[val]+13;if(rot>26){rot=rot-26;}if(k){return v[rot];}
  else{return val;}});
  return a.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
