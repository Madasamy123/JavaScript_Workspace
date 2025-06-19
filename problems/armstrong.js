
let num=373;
let sum=0;

for(let len=1;len<=1000;len++){

    let first=len.toString().split("");
  


for(let i=0;i<first.length;i++){
    let second=Number(first[i])**3;
    sum+=second;
}

if(sum==len){
    console.log("It is armstrong number");
    
}
// else{
//     console.log("It is not armstrong number");
    
// }


}



