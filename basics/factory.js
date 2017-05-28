'use strict'

var peopleFactory = function(name, age, state){

  var temp = {};

  temp.age = age;
  temp.name = name;
  temp.state = state;

  temp.printPerson = function(){
    console.log(this.name + ',' + this.age + ',' + this.state);

  };
  return temp;
};

var person1 = peopleFactory('Jane',24,'Ls');
var person2 = peopleFactory('Hovo', 30,'Sa');
person1.printPerson();
person2.printPerson();
