'use strict'

var Job = function(){
  this.pays = true;
};

/*
//prototype method
Job.prototype.print = function(){
  console.log(this.pays ? 'Please hire me' : 'no thank you');
};
*/

//subclass
var TechJob = function(title, pays){
  Job.call(this);
  this.title = title;
  this.pays = pays;
};

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

//"Object" is the master or root object
Object.prototype.print = function(){
  console.log('I am executing from the Master Object');
};

/*
TechJob.prototype.print = function(){
  console.log(this.pays ? this.title + 'job is great, please hire me' : 'I would rather learn javaScript');
};
*/


var softwarePosition = new TechJob('JavaScript Programmer',
   true);
var softwarePosition2 = new TechJob('vb Programmer', false);


   console.log(softwarePosition.print());
   console.log(softwarePosition2.print());
