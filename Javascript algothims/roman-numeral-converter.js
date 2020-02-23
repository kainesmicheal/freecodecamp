
function convertToRoman(num) {
    let decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let val= "";    
    for(let i=0;i<decimal.length;i++){
        while(decimal[i]<=num){
            val+=roman[i];
            console.log(val,num);
            num-=decimal[i];
            
        }
    }

    return val;
}

console.log(convertToRoman(1236));
