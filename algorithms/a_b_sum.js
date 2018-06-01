'use strict'

function add() {
    //  capture scoped arguments, arrayify
    //var args = Array.prototype.slice.call(arguments);
    var args = [...arguments];

    return function() {
        //  capture scoped arguments, arrayify
        //var args2 = Array.prototype.slice.call(arguments);
        var args2 = [...arguments];

        //  base condition (empty parens)
        if(typeof args2[0] == 'undefined') {
            //  abuse Array.reduce to sum all args from first fn
            return args.reduce(function(a, b){
                return a + b;
            }, 0);
        }

        //  non-base condition
        //  prefill add with all previous numbers as separate args
        //  e.g. add(1)(2) will become add(1, 2), add(1, 2)(3, 4) becomes add(1, 2, 3, 4), etc.
        return add.apply(this, args.concat(args2));
    }
}

console.log(add(2, 3)(1)(4, 5, 6)());                      //  21
console.log(add(2, 3)(1)(4, 5, 6)(3)(2)(10, 8)(0)(23)());  //  67
