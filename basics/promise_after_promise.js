'use strict'
/*
let cleanRoom = () => {
  return new Promise((resolve, reject) => {
    resolve(' The Room was cleaned');
  });
};

let removeGarbage = (message) => {
  return new Promise((resolve, reject) => {
    resolve(message + ', Garbage was removed');
  });
};

let winIcecream = (message) => {
  return new Promise((resolve, reject) => {
    resolve(message + ', so I won an Icecream.')
  });
};


cleanRoom().then((result) => {
  return removeGarbage(result);
}).then((result) => {
  return winIcecream(result);
}).then((result) => {
  console.log(result + '\n' +  'Finished!');
});
// the output is:
// The Room was cleaned, Garbage was removed, so I won an Icecream.
// Finished!

Promise.all([cleanRoom(), removeGarbage(),
   winIcecream()]).then( () => {
     console.log('All finished!');
});

Promise.race([cleanRoom(), removeGarbage(),
   winIcecream()]).then( () => {
     console.log('One of them is finished!');
});
*/
//////////////////////////////////////////////////////////
// Plain CB based API
const test_func = (item, cb) => {
  setTimeout(() => {
    if (item < 5) cb(null, 'Success');
    else cb(new Error('Oops'), null);
  }, 3000);
};

test_func(3, (err, success) => console.log(success));

const test_func_promise = item => {
  return new Promise((accept, reject) => {
     test_func(item, (err, success) => {
      if (err) reject(err);
      else accept(success);
    });
  });
};

test_func_promise(2)
.then(item => { console.log('Sucess!!', item); })
.catch(err => console.error(err));


const test_func_async_example = async (item) => {
  try {
    const result = await test_func_promise(item);
    console.log(`Yay: ${result}`);
  } catch(e) {
    console.error(`Messed up: ${e}`);
  }
};

test_func_async_example(6);
test_func_async_example(3);
