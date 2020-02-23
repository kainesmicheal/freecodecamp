function telephoneCheck(str) {
  let hasTenDigits = false;
  let hasElevenDigits = false;
  let startsWithOne = false;
  let hasPermittedCharsOnly = false;
  let hasCorrectParentheses = false;
  let hasNoChars = false;
  if(str.match(/\d/g).length == 10){
    hasTenDigits = true;
  }
  if(str.match(/\d/g).length == 11){
    hasElevenDigits = true;
  }
  if((/^[1]/).test(str)){
    startsWithOne = true;
  } 
  if((/-(?=[)])/g).test(str)){
    hasPermittedCharsOnly = true;
    
  }
  if(str.indexOf(")")==-1&&(/-/g).test(str)){
    hasPermittedCharsOnly = true;
  }
  if((/([(])[\d][\d][\d]([)])/).test(str)){
    hasCorrectParentheses = true;
  }
  
  if((/[-]|[()]/).test(str)==false){
    hasNoChars = true;
  }
  if(hasTenDigits&&startsWithOne){
    let count = 0;
   if(hasNoChars){
     return true;
   }
   if(hasPermittedCharsOnly){
     return true;
   }
   if(hasCorrectParentheses){
     return true
   }
   else{
     
   return false;
   }
  }
  else if(hasElevenDigits&&startsWithOne){
    let count = 0;
   if(hasNoChars){
     
     return true;
   }
   if(hasPermittedCharsOnly){
     
     return true;
   }
   if(hasCorrectParentheses){
     
     return true
   }
   else{
     
    return false;
   }
  }
  else{
    if(hasTenDigits&&hasNoChars){
       return true;
     }
     if(hasTenDigits&&hasPermittedCharsOnly&&str.indexOf("(")==-1){
       return true;
     }
     if(hasTenDigits&&str.indexOf("(")!=-1&&str.indexOf(")")!=-1&&str.indexOf("-")!=-1&&str.indexOf("?")==-1){
       return true;
     }
    return false;
  }
}

console.log(telephoneCheck("(555)555-5555"));
