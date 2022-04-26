/*function (x,y)){
    return x+y;
}*/// fn without  a name
const sum=function (x,y,cb){

 var result= x+y;
 cb(result);
}
//document.write(sum(10,20));//in this that var name becomes fn name
function logresult(result){
    console.log(result);
}
sum(10,20,logresult);//
