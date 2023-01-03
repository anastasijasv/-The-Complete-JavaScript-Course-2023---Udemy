// Values and Variables

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);


// Data Types

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


// let, const and var

let age = 30;
age = 31;

const birthYear = 1991;

var job = "programmer";
job = "teacher";


// Basic Operators

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


// Operator Precedence

let a, b;
a = b = 25 - 10 - 5; // a = b = 10
console.log(a, b);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



