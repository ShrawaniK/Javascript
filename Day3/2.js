/*Explain with examples the remaining methods of String*/

//String Mehods

/* 1.charAt() : Returns the character at the specified index(position) in a string.
The index of the first character is 0 and the index of the last character is string.length-1. */
let str="String";
let a=console.log(str.charAt(3));

/* 2.charCodeAt() : Returns the ASCII value of the character at the specified index.*/

let b=str.charCodeAt(1);
console.log(b);

/* 3.concat() : Joins two or more strings and returns a new joined string.*/

let str1="Methods";
console.log("First String is "+str);
console.log("Second String is "+str1);
let c= str.concat(str1);
console.log("Concatenated String is "+c);

/* 4.endsWith() : Checks whether a string ends with specified string/characters.*/
console.log(str);
let d= str.endsWith("a");
let e= str.endsWith("g");

/* 5. fromCharCode() : Converts ASCII values to characters.*/
let f= String.fromCharCode(72);
console.log(f);

/* 6. includes() : Checks whether a string contains the specified string/characters.*/
let g = c.includes("ing");
console.log(g);

/* 7. indexOf() : Returns the position of the first found occurence of a specified value in a string.*/

let h= c.indexOf("Methods");
console.log(h);

/* 8. lastIndexOf() : Returns the position of last found occurence of a specified value in a string*/

let i= c.lastIndexOf("Methods");
console.log(i);



/* 9. repeat() : Returns a new string with a specified number of copies of an existing string.*/

let m = "Hello!";
console.log(m);
let n=m.repeat(5);
console.log(n);

/* 10. replace() : Searches a string for a specified value and 
returns a new string where the specified values are replaced.*/

let o="Hello World";
console.log(o);
let p=o.replace("World","LetsUpgraders");
console.log(p);

/* 11. search() : searches a string for a specified value and returns the position of match.
returns -1 if no match is found. */

console.log(o);
let q=console.log(o.search("World"));

/* 12. slice() : extracts a part of a string and returns a new string. */

let r=console.log(o.slice(6,11));

/* 13. split() : splits a string into an array of substrings.*/

let s=console.log(o.split());

/* 14. startsWith() : Checks whether a string begins with specified characters.*/

let t=o.startsWith("World");

/* 15. substring() : Extracts the characters from a string, between two specified indices.*/

let u=console.log(o.substring(1,4));

/* 16. toLowerCase() : Converts a string to lowercase letters.*/

let v="HeLlO";
let w=console.log(v.toLowerCase());

/* 17. toUpperCase() : converts a string to uppercas letters.*/

let x=console.log(v.toUpperCase());

/* 18. trim() : removes whitespace from both ends of a string.*/

let y="Let's Upgrade";
let z=console.log(y.trim());