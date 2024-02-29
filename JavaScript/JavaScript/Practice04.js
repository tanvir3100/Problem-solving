// Chapter 4 - Practice Set
// Problem 1
let str = 'Tan"';
console.log(str.length);

// Problem 2
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox2";
console.log(sentence.includes(word));
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`,
);
//startwith
const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat"));
// Expected output: true

console.log(str1.startsWith("Sat", 3));
// Expected output: false

//endswith
const str5 = "Cats are the best!";

console.log(str5.endsWith("best!"));
// Expected output: true

console.log(str1.endsWith("best", 17));
// Expected output: true

const str2 = "Is this a question?";

console.log(str2.endsWith("question"));
// Expected output: false

// Problem 3
console.log(word.toLowerCase());
console.log(word.toUpperCase());

// Problem 4
let str3 = "Please give Rs 1000";
let amount = Number.parseInt(str2.slice(15));
console.log(amount);
console.log(typeof amount);

// Problem 5
let friend = "Deepika";
friend[3] = "R";
console.log(friend); // friend is not changed, because string is immutable
