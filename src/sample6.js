/* eslint-disable semi */
const o = new Object();
const a = new Array();
const d = new Date();
const f1 = function() {
  // console.log('The cow jumped over the moon');
};

// console.log("Date =" + d);
f1();

//
const o1 = Object.create({ x: 100, y: 200 });
// console.log( 'x=' + o1.x + 'y=' + o1.y);
// console.log(o1);

const o2 = Object.create(null);
const o3 = Object.create(Object.prototype);
// const o3 = new Object();
// const o3 = {};
// console.log(o2);
// console.log(o3);

//

function getChild (parent) {
  if (parent == null) throw TypeError();
  return Object.create(parent);
}

let o4 = { x: "don't change this value"};
// console.log(o4.x);
let p = getChild(o4);
// console.log(p);

//
// o4 = null;
// p = getChild(o4); // object.create(null);
// console.log(p); // shows no property

// Object.prototype = 0;
// console.log(Object);
// the prototype properties of built-in are read-only
// Object.prototype unchanged

let o5 = {};
// console.log(o5);
o5.x = 100;
// console.log(o5);
p = getChild(o5);
// console.log(p);
p.y = 200;
let q = getChild(p);
q.z = 300;
// console.log(q);
console.log("q.x + q.y + q.z" + (q.x + q.y + q.z));
console.log("p.x + p.y + p.z" + (p.x + p.y + p.z));
console.log("p.x + p.y " + (p.x + p.y));
console.log("o5.x + o5.y " + (o5.x + o5.y));
console.log("o5.x" + o5.x);

//
let book = {
  'main title': 'Javascript',
  'subtitle': 'The guide',
  'for': 'all audiences',
  author: {
    firtname: 'Donald',
    surname: 'Duck'
  }
};
let len = undefined;
// book=null;
// if(book) {
//   if(book.subtitle) {
//     len=book.subtitle.length;
//     console.log(len);
//   }else
//     console.log("book.subtitle undefined:");
// }
// else
//   console.log("book is null");

len = book && book.subtitle && book.subtitle.length;
if (len) console.log(len);

//
console.log(book.author);
delete book.author;
console.log(book.author);

console.log(book["main title"]);
delete book["main title"];
console.log(book["main title"]);

let o6 = {x: 100};
console.log(o6.x);
delete o6.x;
console.log(o6.x);
console.log(o6.toString);
delete o6.tostring;

// can not delete
delete Object.prototype; // not possible
var b = 1;               // not possible
delete this.a;            // not possible
function f5 () {}          // not possible
delete this.f5();           // not possible
