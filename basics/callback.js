'use strict'

let add = (a,b) => {return a+b};
let mult = (a,b) => {return a*b};

let calc = (n1, n2, call_fun) => {
  if (typeof call_fun === "function"){
      return call_fun(n1, n2);
  }
};

console.log(calc(10, 2, add));
console.log(calc(10, 2, mult));
console.log(calc(10,2, (n1, n2) => {return n1 - n2}));

let fruits = [
  {num : 6, str : 'apple'},
  {num : 1, str : 'banana'},
  {num : 2, str : 'apricot'}
]

fruits.sort((x, y) => {
  if (x.num < y.num) return -1;
  else return 1;
});

console.log(fruits);
