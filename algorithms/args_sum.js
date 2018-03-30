'use strict'

var sum_recursion = function(a, b){
  var args = a;

  //console.log('Array.isArray(args)',!Array.isArray(args))
  if (!Array.isArray(args)) args = [...arguments];
  var n = args.length;
  if (n === 1) return args[0];

  var last_el = args.pop();
  return last_el + sum_recursion(args);
}

//console.log(sum_recursion([1, 2, 3, 5], 1))
console.log(sum_recursion(2, 3, 4, 5))
