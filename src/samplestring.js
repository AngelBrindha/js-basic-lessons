/* eslint-disable camelcase */
/* eslint-disable quotes */
/* eslint-disable semi */
// 3 ways to create strings variables
// 1. using ''
// 2. using ""
// 3. using ``

const my_name = 'NamefieldEmpty';
const middle = 'Gabbar';
const last = 'Singh';

console.log(my_name);
console.log(middle);
console.log(last);

const sentence1 = 'shes\'s so cool';
console.log(sentence1);

const sentence2 = "she's so cool";
console.log(sentence2);

const sentence3 = `'she's so cool'`;
console.log(sentence3);

const sentence4 = "she's so \"cool\"";
console.log(sentence4);

// multi line string using single quote doesn't work
const song1 = `I Like ARR songs and Aniruth songs`;
console.log(song1);

const hello3 = 'hello my name is ' + my_name + ". Nice to meet you";
console.log(hello3);
const hello4 = `hello my name is ${my_name} . Nice to meet you.Iam ${1 + 100} years old`;
console.log(hello4);

const html = `<div>
    <h2>${my_name}</h2>
    <p>${hello3}</p>
    </div>`;
console.log(html);
// document.body.innerHTML = html;
