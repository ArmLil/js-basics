'use strict'

var sum = function(a, b, ...c) {
  if (b == undefined) return a;
  return a + sum(b, ...c);
}
console.log(sum(2, 3, 4, 1))
