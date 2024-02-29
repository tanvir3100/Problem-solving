// let name = "Tanvir";
// console.log(name.length)

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2, 4))
// console.log(name.slice(2))
// console.log(name.replace("Tan", "Per"))
// let friend = "Rohan"
// console.log(name.concat(" is a friend of ", friend, " Ok"))
// let friend2 = "      Meena        "
// console.log(friend2)
// console.log(friend2.trim())
// let fr = "Rony" + "Shova" + "Tanvir";
// console.log(fr[0]);
// console.log(fr[1]);
// console.log(fr[2]);
// console.log(fr[3]);
// fr[4]= "o" // This is not possible
// console.log(fr);

// QuickQuiz: Use a for loop to print a string
/*
let furit = "mango";
for (let i of furit) {
  console.log(i);
}

for (let i = 0; i < furit.length; i++) {
  console.log(furit[i]);
}

for (let i in furit) {
  console.log(furit[i]);
}

*/

let name = "tanvir";
/*
There is 2 ways to access an individul character in a string.
1. charAt(position)
2. name[1]
*/

console.log(name.charAt(0));
console.log(name[2]);

/*
Use the less-than and greater-than operators to compare strings:

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

*/

/*
Note that all comparison operators, including === and ==, compare strings case-sensitively. A common way to compare strings case-insensitively is to convert both to the same case (upper or lower) before comparing them.

function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}

*/

/*
The choice of whether to transform by toUpperCase() or toLowerCase() is mostly arbitrary, and neither one is fully robust when extending beyond the Latin alphabet. For example, the German lowercase letter ß and ss are both transformed to SS by toUpperCase(), while the Turkish letter ı would be falsely reported as unequal to I by toLowerCase() unless specifically using toLocaleLowerCase("tr").

const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true

*/
