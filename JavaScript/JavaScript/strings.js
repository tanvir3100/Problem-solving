/*
String is a primitive data type.
String is a collection of charachters.
string is use for manuipulating text.

-----------String is a immutable----------------------
//string is immutable tha's why we can't change the string but you can make a new string
*/

let name = "Tanvir";
// console.log(name.length)
console.log(name[0]);
console.log(name[1]);
let friend = "Rofik";
console.log(friend);
// let myfriend = "Rofik' // Dont do this
// console.log(myfriend)

// Template literals
let boy1 = "sohel";
let boy2 = "Rana";
// sohle is a friend of Rana
let sentence = `${boy2} is a friend of ${boy1}`;
console.log(sentence);

// Escape Sequence Characters
// let fruit = 'Bana\'na'
// console.log(fruit)
let fruit = 'Bana"na';
console.log(fruit);
