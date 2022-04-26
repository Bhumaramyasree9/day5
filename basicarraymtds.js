var days=['mon','tue','wed','thurs'];
days.sort();
days.reverse();
console.log( days );
console.log(days.indexOf('mon'));
console.log(days.indexOf('sat'));
var numbers=[20,30,40,50,80,90,70,69,70,5,7000,800];
numbers.sort();
console.log(numbers);//sort fn sorts array using string comparision
numbers.sort(function(b,c)
{
    console.log(b,c);
    return b-c;
    return c-b;
});
console.log(numbers);

