function palindrome(str) {
  // Good luck!
  let a = str.split("").filter(val=>
  {
    let regex = /[\W_]/g;
    let result = regex.test(val);
    if(!result){
      return val;
    }
  });
  a = a.join("").toLowerCase();
  let r = [];
  let reverse = "".concat(a);
  
  reverse = reverse.split("").reduce((i,val,j)=>{
    r.push(a[i]);
    
    return i = i-1;
  },reverse.length-1);
  console.log(reverse,a,r);

  if(a==r.join("")){
    return true;
  }
  else{
    return false;
  }
  
}



console.log(palindrome("1 eye for of 1 eye."));
