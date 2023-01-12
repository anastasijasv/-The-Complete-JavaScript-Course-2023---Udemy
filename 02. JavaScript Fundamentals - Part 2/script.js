"use strict";

// LECTURE: Activating Strict Mode

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive 😀");

// const interface = "Audio";
// const private = 524;
// const if = 23;

// LECTURE: Functions

function logger() {
  console.log("My name is Jonas");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declarations vs. Expressions

// Function declaration - can be called before it is defined:
// const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression (anonymous function) - produces value:
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow Functions
