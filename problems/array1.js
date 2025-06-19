

let arr=[1,2,3,4,5]; 
let n=2;

// positive number rotate left to right
if(n>0){
    for(let i=0;i<n;i++){
     let first=arr.shift();
     arr.push(first)
}


}   // negative number rotate right to left
else if(n<0){

    for(let i=0;i<Math.abs(n);i++){
     let first=arr.pop()
     arr.unshift(first);
     
}
}
console.log(arr);


