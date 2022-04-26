var array=[
    0.001,0.324,0.218,0.889,0.101
];
array.sort(function(b,c)
{
    console.log(b,c);
    //return b-c;
    return c-b;
});
console.log(array);
