/*
 prompt -----prompt ask you a question and take input from user 
 alert ---alert show you a message
*/

let a = prompt("Hey whats you age?");
// /*
//  -----Prompt always give you a string value though you enter a number ------

// a = Number.parseInt(a); // Converting the string to a number it's called type custinng
if (a < 0) {
  alert("This is an invalid age");
} else if (a < 9) {
  alert("You are a kid and you cannot even think of driving");
} else if (a < 18 && a >= 9) {
  alert("You are a kid and you can think of driving after 18");
} else {
  alert("You can now drive as you are above 18");
}
console.log("Done");
/*
 Explore switch statement

In JavaScript, a switch statement is a control flow statement used to perform different actions based on different conditions. It provides a way to write more concise and readable code compared to using multiple if statements, especially when there are multiple conditions to check against a single variable.
*/

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Unknown";
}

console.log(dayName); // Output: Wednesday