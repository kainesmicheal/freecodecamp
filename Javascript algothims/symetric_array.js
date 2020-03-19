
let check = (val,arr) =>{
  let result = arr.filter(a=>{
  return a==val
  })
  return result.length == 0?true:false;
};
console.log(check(1,[1,2,3,12]));

function sym(args) {
  let test = [...arguments];
  let test1 = [];
  test.map(a=>{
    let temp = [];
    a.map(b=>{
    if(check(b,temp)){
      temp.push(b)
    }
  })
  test1.push(temp)
  })
  console.log(test1);
  console.log(test);
  let result = [];
  test.map((a)=>a.map(b=>{
    if(check(b,result)){
      result.push(b);
    }

  }))
  let okay = result.map(i=>
  (test1.map(a=>a.filter(b=>{if(b==i)return true}))))

  let maybe = okay.filter(arr1=>(arr1.filter(arr2=>arr2.length==1)).length==1)



  return [].concat(...[].concat(...maybe))
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
