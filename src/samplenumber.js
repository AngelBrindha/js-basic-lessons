/* eslint-disable semi */
// Number
// only one type of num in JS whether it is decimal num or not

const age = 100;
const money = 1000.50;
console.log(typeof age);
console.log(typeof money);

// "typeof" is used to find out the 'type' of a variable

console.log("10" * "10");
console.log("10" - "3");
console.log("10" / "2");

// above was working in -,/,* and not in +, because + it used for concentenation

// math helper methods

console.log(Math.round(2.2));
console.log(Math.floor(5.6));
console.log(Math.ceil(8.4));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachKidGets = Math.floor(sweets / kids);
console.log(eachKidGets);
const leftsweets = sweets % kids;
console.log(leftsweets);

// ** it means 2 to the power of 3 */
let x = 2 ** 3;
console.log(x);
x = Math.pow(2,3);
console.log(x);

//
console.log(0.1 + 0.4);
console.log(0.1 + 0.2); // it makes 0.30000000000000004 so it makes minnor error

// let costofproduct = 100.95;
// let costofproduct = 10095; in paise
// so, when working with money, dont store them as (rupees..paise) or (dollars...cents).
// store them as (paise/cents)
// you won't have to deal with fractions only whole nos.
// when need to display to user, just convert them back.

console.log(typeof Infinity); // infinity datatype number
console.log(typeof -Infinity);
let result = 10/'hello';
console.log(typeof NaN); // NaN is also a number

// check the datatype of a value
let x1 = 100;
let result1 = Number.isInteger(x1);
console.log(`x is a number: ${result1}`);
let y = "abcd";
result = Number.isInteger(y);
console.log(`Is y a number: ${result}`);
result = (typeof y === 'string');
console.log(`Is y a string: ${result}`);
let flag = true;
result = (typeof flag === 'boolean');
console.log(`Is flag a boolean: ${result}`);
let nos = [1,2,3,4,5];
result = (typeof nos === 'object');
console.log(`Is nos an object: ${result}`);

