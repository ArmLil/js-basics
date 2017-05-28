'use strict'

let string = 'abc';

string = string.toUpperCase();

console.log(string);

String.prototype.toUpperCase = function () {
	return 'noName';
};
string = string.toUpperCase();
console.log(string);
