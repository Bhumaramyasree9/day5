//function declaration 
function sum(x,y){ //sum(arguments not needed to declare asvar)
 var result=x+y;
 return result;
}
var result=sum( 22,88);
console.log(result);
//function expression(variable assignment and declaration)
var sum1=function(x,y){
    var result=x+y;
    return result;

}
console.log(sum1(13,77));
