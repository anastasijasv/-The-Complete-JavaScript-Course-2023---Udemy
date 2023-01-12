"use strict";

/* LECTURE: Functions

1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'.
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console. */

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const describeSweden = describeCountry("Sweden", 10.5, "Stockholm");
console.log(describeSweden);

const describeLatvia = describeCountry("Latvia", 1.8, "Riga");
console.log(describeLatvia);

const describeUkraine = describeCountry("Ukraine", 41, "Kyiv");
console.log(describeUkraine);

/* LECTURE: Function Declarations vs. Expressions

1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population.
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100.
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console.
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations). */

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentageFinland1 = percentageOfWorld1(5.53);
const percentageLatvia1 = percentageOfWorld1(1.8);
const percentageSweden1 = percentageOfWorld1(10.5);
console.log(percentageFinland1, percentageLatvia1, percentageSweden1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const percentageFinland2 = percentageOfWorld2(5.53);
const percentageLatvia2 = percentageOfWorld2(1.8);
const percentageSweden2 = percentageOfWorld2(10.5);
console.log(percentageFinland2, percentageLatvia2, percentageSweden2);
