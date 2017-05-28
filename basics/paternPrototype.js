'use strict'

var peopleProto = function(name, age, state){

};
peopleProto.prototype.age = 0;
peopleProto.prototype.name = 'no name';
peopleProto.prototype.city = 'no city';

peopleProto.prototype.printPerson = function(){
  console.log(this.name + ',' + this.age + ',' + this.state);
};

var person1 = new peopleProto();

person1.name = 'Jon';
//person1.age  = 19;
person1.state = 'Sa';

console.log('age' in person1);//return true
console.log(person1.hasOwnProperty('age'));//return false

person1.printPerson();
