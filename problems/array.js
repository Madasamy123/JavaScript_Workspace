
//  

// let arr=[1,2,1,3,2,4,2,5,3,7,8,6]
// let newarr=[];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             if(!newarr.includes(arr[i])){
//                newarr.push(arr[i])
//             }
           
            
//         }
//     }
// }

// console.log(newarr);

let arr=[1,2,1,3,2,4,2,5,3,7,8,6]

let obj={};
let count=0;

for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]++
    }
    else{
        obj[arr[i]]=1
    }
}

for(let key in obj){
    console.log(key+" : "+obj[key])
}






