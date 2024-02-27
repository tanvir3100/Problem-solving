/**
Before Es6 in javascript we use var to declare variable but now we use let and const to declare a varibale.

Becouse: in the case of var we saw some time bug in our code.

 cosnt:
 we are use const to declare constant
 constant's is and identiifer
which is not changeable

let: 
we use let for declire block scoped variable's.
---------ES6 --ECMAScript 6---------
*/

/**
let is block scoped variable 
and var is globally scoped variable
*/

/**
in the case of var we can redeclare the variable 
but let and const we can not redeclare the variable
*/

// let can be updated but not re-declared

// var can be updated and re-declared

// const nether be updated nor be re-declared

console.log("JavaScript tutorial 3: var, let and const");
// var a = 45;
// var a = "p"
let b = "Harry";
const author = "Harry";
author = 5; // Throws an error because constant cannot be changed
b = 4;
const harry = 0;
let c = null;
let d = undefined;
{
    let b = "this";
    console.log(b);
}
console.log(b);
