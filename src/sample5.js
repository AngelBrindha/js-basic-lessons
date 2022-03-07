/* eslint-disable semi */
console.log('Hi Node!!');
function callme () {
  const x = 100; // x and y global var
  const y = x * 2;
  if (x < 500) {
    console.log('x < 500');
    const z = x + y;
    console.log(`z : ${z}`);
  }
  if (y < 500) {
    console.log('y < 500')
    const v1 = z + y; // but z was not used in global so dont access inside another block
    console.log(`v1: ${v1}`);
  }
}

console.log(callme());
