'use strict'

let obj = {num: 2};

let addToThis = function(a, b, c){
  return this.num + a + b + c;
};


let arr = [1,2,3];

let bound = addToThis.bind(obj);

console.log('bound(1,2,3)=',bound(1,2,3));


console.log(addToThis.bind(obj)(1, 2, 3));
