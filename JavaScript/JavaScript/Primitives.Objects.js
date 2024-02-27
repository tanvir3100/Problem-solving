/**

-------datatype-----
what type of content can be stored inside which variable

----------------------
primitives data types 7types 


There are 7 primiitive data types in javascript
primiitive data types are fundamental data types

those are build in javaScript
those are 
n--null
n--number
s--string
s--symbol
b--boolean
b--bigint
u--undefined



--------Objects-----
non primitives data types are called objects in javascript


objects is a key value pair
keys are like string,number etc and the values are date types
pr
*/

// nn bb ss u - Primitives in Js
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g;
console.log(a, b, c, d, e, f, g);
console.log(typeof c);

// Non Primitive Data Type - Objects in Js
const item = {
  Harry: true,
  Shubh: false,
  Lovish: 67,
  Rohan: undefined,
};
console.log(item["Shubh"]);
