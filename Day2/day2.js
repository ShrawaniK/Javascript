//console.log(); type of display possibility in JS. Used to print/log the output to the console.
console.log('abc'); //string
console.log(true); //boolean
console.log(1);  //number
console.log([1,2,3,4]); //array inside log
console.log({a:1,b:2,c:3}); //object inside log

//console.erroe(); used to print the error message to the console.
console.error("Error Occured");

//console.warn(); used to log warning message to the console. by default the warning message will be highlighted with yellow color.
console.warn("This is warning message");

/*console.time(); and console.timeEnd() 
To know the amount of time spend by a block or a function,
we can make use of the time() and timeEnd(). they take a
label which must be same and the code inside can be anything(function,object,simple console)*/
console.time('Time Taken');
console.log('Calculating time required for execution');
console.log('%c Time:','color:green');
console.timeEnd('Time Taken');
/*console.table(); this method allows us to generate a table inside a console.
Thr i/p must be an array or an object which will be shown as table.*/
console.table({'a':1,'b':2});

//console.clear(); to clear the console.
console.clear();