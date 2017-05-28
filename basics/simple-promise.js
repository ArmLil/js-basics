'use strict'

let promiseToCleanTheRoom = new Promise((resolve, reject) => {
  //cleaning the room

  let isClean = false;

  if(isClean){
    resolve(' Clean');
  } else {
    reject('not clean');
  }
});

promiseToCleanTheRoom.then(function(fromResolve){
  console.log('The room is' + fromResolve);
}).catch(function(fromReject){
  console.log('The room is ' + fromReject);
});
