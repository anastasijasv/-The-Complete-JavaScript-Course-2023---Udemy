// LECTURE: Values and Variables

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

// LECTURE: Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// LECTURE: let, const and var

let myAge = 30;
myAge = 31;

const birthYear = 1991;

var job = "programmer";
job = "teacher";

// LECTURE: Basic Operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const myFirstName = "Anastasija";
const myLastName = "Sviridova";
console.log(myFirstName + " " + myLastName);

let x = 10 + 5; // 15
x += 10; // x  = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x-1
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

// LECTURE: Operator Precedence

let a, b;
a = b = 25 - 10 - 5; // a = b = 10
console.log(a, b);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// LECTURE: Strings and Template Literals

const myName = "Jonas";
const profession = "teacher";
const birth = 1991;
const current = 2027;

const jonas =
  "I'm " +
  myName +
  ", a " +
  (current - birth) +
  " year old " +
  profession +
  "!";
console.log(jonas);

const jonasNew = `I'm ${myName}, a ${current - birth} year old ${profession}!`;
console.log(jonasNew);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines`);

// LECTURE: Taking Decisions: if / else Statements

const age1 = 19;
const isOldEnough = age1 >= 18;
if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
}

const age2 = 15;
if (age2 >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age2;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😊`);
}

const myBirth = 1983;
let century;
if (myBirth <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// LECTURE: Type Conversion and Coercion

const inputYear = "1991";
console.log(inputYear, Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof Nan);

console.log(String(23), 23);

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3); // 10
console.log("23" + "10" + 3); // 23103

let n = "1" + 1; // "11"
n = n - 1; // 10
console.log(n);

// LECTURE: Truthy and Falsy Values

// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money1 = 0;
if (money1) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
} // You should get a job!

const money2 = 100;
if (money2) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
} // Don't spend it all ;)

let height1;
if (height1) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
} // Height is UNDEFINED

let height2 = 123;
if (height2) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
} // YAY! Height is defined

let height3 = 0;
if (height3) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
} // Height is UNDEFINED

// LECTURE: Equality Operators: == vs ===

// == loose equality operator (type coercion):
"18" == 18; // true

// === strict equality operator (no type coercion):
"18" === 18; // false

const age = 18;
if (age === 18) console.log("You just became an adult 😀");

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {
//   // "23" == 23
//   console.log("Cool! 23 is an amazing number!");
// }

// const favourite = Number(prompt("What's your favourite number?"));
// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favourite !== 23) console.log("Why not 23?");

// LECTURE: Boolean Logic: AND, OR & NOT Operators

/* 
A AND B
true when ALL are true

A OR B
true when ONE is true

NOT A, NOT B
inverts true/false value

age = 16
A: Age is greater or equal 20 -> false
B: Age is less than 30 -> true

!A -> true
A AND B -> false
A OR B -> true
!A AND B -> true
A OR !B -> false
*/

// LECTURE: Logical Operators

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = true;
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// LECTURE: The switch Statement

const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend 😀");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend 😀");
} else {
  console.log("Not a valid day!");
}

// LECTURE: Statements and Expressions

// Expression produces some value:
3 + 4;
1991;
true && false;

// Statement performs some action, but it doesn't produce a value:
if (23 > 10) {
  const str = "23 is bigger";
}

// LECTURE: The Conditional (Ternary) Operator

const newAge = 23;
newAge >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = newAge >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (newAge >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${newAge >= 18 ? "wine 🍷" : "water 💧"}`);

// LECTURE: JavaScript Releases: ES5, ES6+ and ESNext

/* 
1995 - Mocha by Brendan Eich (first version of JS)
1996 - Mocha -> LiveScript -> JavaScript
1997 - ECMAScript 1 or ES1 (first official standard for JS)
2009 - ES5 (lots of great new features)
2015 - ES6/ES2015 (the biggest update to the language ever)
2016 - ES2016 (and further annual release cycle)

Backwards compatible (DON'T BREAK THE WEB principle)

Development: use the latest Google Chrome.
Production: use Babel to transpile and polyfill the code.
*/
