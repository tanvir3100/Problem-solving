/**
Create a variable of type string and try to add a unmber of it.
*/
// Chapter 1 - Q1
let a = "Harry";
let b = 6;
console.log(a + b);

//use typeof to find the datatype of the string in last question
// Chapter 1 - Q2
console.log(typeof (a + b));

//create a const object in javascript can you change it to hold a number later?
// Chapter 1 - Q3
const a1 = {
  name: "Harry",
  section: 1,
  isPrincipal: false,
};
// a1 = 45
// a1 = {}

// Chapter 1 - Q4
// Try to add a new key to the const object in problem 3 were you able to do it?
a1["friend"] = "Shubham";
a1["name"] = "Lovish";
console.log(a1);

// Chapter 1 - Q5
// write a js program to create a word-meaning dictionary of 5 words
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work.",
};

console.log(dict["yakka"]);
