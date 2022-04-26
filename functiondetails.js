function foo(x,y,z){
    console.log('foo');
    console.log(x,y,z);// jst seeing wat will be the values of y and z
    console.log(arguments);//---o/p----{ '0': 'kk', '1': 'jj', '2': 'lll', '3': 'oo', '4': 'pp' }-----arguments:objoriented string
    console.log(arguments.length);
}
//foo();---o/p :foo
//foo('hello');-----o/p:hello ,undefined,undefined------//in any other languauges the no of arguments and no of enteries should 
//be same but here in java script no of enteries need not to be same
// lets pass more arguments
foo('kk','jj','lll','oo','pp');//aruguments
