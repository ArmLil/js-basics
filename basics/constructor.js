'use strict'

var peopleConstructor = function(name, age, state){


  this.age = age;
  this.name = name;
  this.state = state;

  this.printPerson = function(){
    console.log(this.name + ',' + this.age + ',' + this.state);
  };
};

var person1 = new peopleConstructor('Jane',24,'Ls');
var person2 = new peopleConstructor('Hovo', 30,'Sa');
person1.printPerson();
person2.printPerson();
