var days=['mon','tue','wed','thurs','fri'];
days.push('sat');
days.push('sun');//adds an ele at end of array
days.sort();
console.log(days);
days.pop();//removes last item in array
console.log(days);
var removedday=days.pop();//pop even provides us the removed element
console.log(removedday);//pop even