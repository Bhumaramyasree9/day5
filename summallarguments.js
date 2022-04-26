function sumall(){
    for (var i=0,result=0;i<arguments.length;i++){
 result = result+arguments[i];
}
return result;
}


console.log(sumall(10,40));
console.log(sumall(10,40,80));
console.log(sumall(10,40,90,80,70));


