//const f2 = ({ x, y, z = 1 }) => x + y + z;
//const f3 = ({ x }, text) => x + ":" + text;

//const f4 = ([x, y]) => x + y;
//const f5 = ([x, , z]) => x * z;

//console.log(f2({ x: 1, y: 2 }));
//console.log(f3({ x: 3 }, "Bee"));

//console.log(f4([1, 2]));
//console.log(f5([1, 2, 3]));

//-----------------------------------------//
// const super_exponent = x => {
//   return function(y) {
//     return mathPow(x, y);
//   };
// };

//const super_exponent = x => y => x ** y;

//console.log(super_exponent(2)(4));

/* Simple Arrow Function */
const f = x => x + 10;
// const f = (x) => x + 10
const add = (x, y) => x + y;

console.log(f(1));
console.log(add(1, 2));

/* Arrow Function with Statements */
const g = () => {
  console.log("nothing");
};

g();

/* Arrow Function Object Destructuring */
const f2 = ({ x, y, z = 1 }) => x + y + z;
const f3 = ({ x }, text) => x + ": " + text;

/* Arrow Function "Array" Destructuring */
const f4 = ([x, y]) => x + y;
const f5 = ([x, , z]) => x * z;

console.log(f2({ x: 1, y: 2 }));
console.log(f3({ x: 3 }, "hello"));
console.log(f4([1, 2]));
console.log(f5([1, 2, 3]));

/* Higher-Order Function */
/* คือ function ที่ 
   1. รับ argument สักตัวที่เป็น function
   [หรือ]
   2. return function ออกไป
*/
const doSomething = callback => {
  callback();
  return 1;
};

// function currying, curried function
// super_add(1) === y => 1 + y
const super_add = x => y => x + y;
const zuper_add = function(x) {
  return function(y) {
    return x + y;
  };
};
const add1plz = super_add(1);
const add10plz = super_add(10);

/* Exercise: super_exponent */
const super_exponent = x => y => x ** y;
// const super_exponent = x => (y => {
//   return 'x: ' + x + ', y: ' + y
// })

console.log(doSomething(g));
console.log(super_add(1)(2));
console.log(super_add(1)(2));
console.log(super_exponent(2)(4));

console.log(add1plz(2));
console.log(add10plz(12));

/* Why bother doing these???? */
