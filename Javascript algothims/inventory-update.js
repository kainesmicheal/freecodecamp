function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let arr = [];
     arr2.map(a=>{
        let count =0;
        arr1.map(b=>{
            if(a[1]==b[1]){
                count =1;
                arr.push([a[0]+b[0],a[1]])
            }
        })
        if(count==0){
               
                arr.push([a[0],a[1]])
            }
    }) 
    arr1.map(a=>{
        let count =0;
        arr.map(b=>{
            if(a[1]==b[1]){
                count =1;
               
            }
        })
        if(count==0){
               
                arr.push([a[0],a[1]])
            }
    })
    return arr.sort((a, b)=>{
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
})
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
