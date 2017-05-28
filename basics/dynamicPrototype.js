'use strict'

var peopleDynamicProto = function(name, age, state){

  this.age = age;
  this.name = name;
  this.state = state;

  if (typeof this.printPerson !== 'function'){
    peopleDynamicProto.prototype.printPerson = function(){
      console.log(this.name + ',' + this.age + ',' + this.state);
    };
  }
};

var person1 = new peopleDynamicProto('Jane',24,'Ls');

person1.printPerson();

console.log('age' in person1);//return true
console.log(person1.hasOwnProperty('age'));//return false
