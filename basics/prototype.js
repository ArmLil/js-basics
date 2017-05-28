'use stric'

var X = function(j){
  this.i = 0;
  this.j = j;
/*
  this.getJ = function(){
    return this.j;
  };
*/
};

//{objName}.prototype.{methodName}
X.prototype.getJ = function(){
  return this.j;
};

var x1 = new X(1);
var x2 = new X(2);

console.log(x1.getJ());
console.log(x2.getJ());

//emty constructor
var Y = function(){

};
console.dir(Y);
//run in chrome browser in https://jsfiddle.net/
// and will see the parent object methods/protos
