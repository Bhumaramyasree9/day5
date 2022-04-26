//arrays are nonprimitive
//arrays can be list od diff itmes in java script
var days=['mon','tue','wed','thurs'];//arrayliteralsyntax
console.log(days);
console.log(days[3]);//o/p--[ 'mon', 'tue', 'wed', 'thurs' ]
//thurs
days[3]='Thursday';
console.log(days);//o/p----[ 'mon', 'tue', 'wed', 'thurs' ]
days[5]='Sat';
console.log(days);//o/p---[ 'mon', 'tue', 'wed', 'Thursday', <1 empty item>, 'Sat' ]
console.log(days[4]);//undefined
console.log(days.length);//6
var dummyarray=['hh','8',0,true,null];
console.log(dummyarray);
//2d array
var matrix=[
    [1,2,3,4,5],[2,3,4,5,7],[6,9,0,7,8]
];
console.log(matrix[2][3]);
