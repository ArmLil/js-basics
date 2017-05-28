'use strict'

var obj = {num: 2};

var addToThis = function(a, b, c){
  return this.num + a + b + c;
}
console.log(addToThis.call(obj, 3, 5, 10));
// output is 20

var arr = [1,2,3];
console.log(addToThis.apply(obj, arr));
//output is 8

console.log(addToThis.bind(obj)(3, 2, 3));
//output is 10
