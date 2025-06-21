
// 00001
// 00011
// 00111
// 01111
// 11111


for(let i=1;i<=5;i++){
    var line="";
    for(let j=1;j<=5-i;j++){

       line+="0"
         
    }

    for(let k=1;k<=i;k++){
        line+="1";
    }


     console.log(line);
}


