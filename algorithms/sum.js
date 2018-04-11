'use strict'

// var add = function (a) {
//   var initial = sum(arguments);
//   var inner = function() {
//     var val = sum(arguments);
//     return add((+val || 0) + (+initial || 0));
//   };
//   inner.valueOf = function () {return +initial || 0;};
//
//   return inner;
// };


var add = function (a, b) {
  if(b != undefined) return a + b;
    return function (c) {
        return a + c;
    };
};



console.log(add(3, 2, 4));
console.log(add(3));
console.log(add(3)(4));
