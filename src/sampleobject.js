/* eslint-disable semi */
// OBJECT
// javascript's fundamental datatype is the object.
// An object is an unordered collection of properties,
// each of which has a name and a Value.property names are Strings, hence objects map strings to values.

const person = {
  first: 'Angel',
  last: 'Brindha',
  age: 22
};

console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first = 'Tom';
person.last = 'jerry';
console.log(person.first);
console.log(person.last);
person.last = null;
console.log(person.last);


// empty object

const empty = {};
const point = { x: 10, y: 50 };
const point2 = { x: point.x, y: point.y + 1 };
console.log(point2.x);
console.log(point2.y);

const book = {
  'main title': 'Java script', // property names include spaces also in '' quotes
  'sub-title': 'Guide to js for beginners', // - also single quotes
  'for': 'students', // reserved key word in '' quotes
  author: {
    first: 'Angel',
    last: 'Brindha'
  }
};
console.log(book['main title']);
console.log(book['sub-title']);
console.log(book['for']);
console.log(book.author.first);
console.log(book.author.last);
// console.log(book.sub-title);
console.log(book.for);
