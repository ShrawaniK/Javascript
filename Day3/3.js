/*Explain with examples the remaining methods of Array*/

//Array Mehods
/*1. concat() : joins two or more arrays, and returns a copy of the joined arrays*/
let a1=["a","b","c"];
console.log(a1);
let b1=["d","e","f"];
console.log(b1);
let c1=a1.concat(b1);
console.log(c1);

/*2. copyWithin() : copies arrays elements within the array, to and from specified positions.
this method will never add more elements to the array.*/
let d1=["apple","banana","orange"];
console.log(d1.copyWithin(2,1));

/*3. fill() : this method fills the specified elements in an array with a static value.*/
console.log(d1);
let e1=console.log(d1.fill("kiwi"));

/*4. from() : this method returns an array object from any object with a length property*/
let f1=Array.from("ABCDEFG");

/*5. includes() : this method determines whether an array contains a specified element.
this method returns true if the array contains the element and false if not.*/
console.log(d1);
let g1=console.log(d1.includes("mango"));

/*6. indexOf() : this method searches the array for the specified item and returns its position.*/
let h1=console.log(d1.indexOf("mango"));

/*7. isArray() : this method determines whether an object is an array.*/
let i1=console.log(Array.isArray(d1));

/*8. join() : this method returns the array as a string.*/
let j1=["banana","orange","apple","mango"];
let k1=console.log(j1.join());

/*9. keys() : returns a array iteration object, containing the keys of the original array.*/
let l1=console.log(j1.keys());

/*10. lastIndexOf(): search the array for an element, starting at the end and returns its position.
returns -1 if the item is not found.*/
let m1=["a","b","c","a","b","a"];
let n1=console.log(m1.lastIndexOf("a"));

/*11. pop() : removes the last element of an array, and returns that element.*/
let o1=console.log(m1.pop());
console.log(m1);

/*12. push() : adds new elements to the end of an array, and returns the new length.*/
console.log(j1);
let p1=console.log(j1.push("kiwi"));

/*13. reverse() : this method reverses the order of the elements in an array.*/
let q1=console.log(j1.reverse());

/*14. shift() : removes the first element of an array, and returns that element.*/
let r1=console.log(j1.shift());

/*15. unshift() : adds new elements to the beggining of an array, and returns new length.*/
let s1=console.log(j1.unshift("lemon","pineapple"));

/*16. slice() : returns the selected elements in an array.*/
let t1=console.log(j1.slice(0,2));

/*17. sort() : sort the items of an array. the sort order can be either alphabetic or numeric,
and either ascending or descending.*/
let u1=console.log(j1.sort());

/*18. toString() : this method returns a string with all the array values, seperated by commas.
this method will not change original array.*/
let fruits=["apple","orange","banana","mango"];
let v1=console.log(fruits.toString());

/*19. valueOf() : this method returns the array.*/
let w1=console.log(fruits.valueOf());
