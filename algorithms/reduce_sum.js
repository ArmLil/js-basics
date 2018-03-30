'use strict'

var sum = function(){
  var args = [...arguments];
  return args.reduce((c, d) => c+d)
}
