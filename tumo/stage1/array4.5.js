// 4․5 Աշխատանք զանգվածի անդամների հետ 2
//
// Ստեղծեք 10 պատահական թվերով լցված զանգված
// Տպել
// Զանգվածի բոլոր զույգ անդամները (արժեքը զույգ է)
// Զանգվածի բոլոր զույգ դիրքերում գտնվող անդամները (ինդեքսը զույգ է)
// Զանգվածի բոլոր կենտ անդամները (արժեքը զույգ է)

var arr = [1, 31, 5, -5, 6, 0, 9, 12, 14, 8];

function printEvenMembers(array) {
  array.forEach(el => {
    if (el % 2 === 0) console.log(el);
  })
}

//printEvenMembers(arr);

function printEvenIndexMembers(array) {
  array.forEach((el, i) => {
    if (i % 2 === 0) console.log(el)
  })
}

//printEvenIndexMembers(arr);

function printOddMembers(array) {
  array.forEach(el => {
    if (el % 2 !== 0) console.log(el);
  })
}

printOddMembers(arr);
