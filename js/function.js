'use strict';
//3.Default parameters(added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('hi');

//4.Rest parameters(added in ES6)
//...(argument): array
function printAll(...args) {
  for (i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  //a of array
  for (const arg of args) {
    console.log(arg);
  }
  //forEach
  args.forEach((arg) => console.log(arg));
}
printAll('a', 'b', 'c');

//7.Early return, early exit
//bad example
function upgradeUser(ueser) {
  if (ueser.point > 10) {
    //long upgrade logic...
  }
}
//good example
function upgradeUser(ueser) {
  if (ueser.point <= 10) {
    return;
  } else {
    //long upgrade logic...
  }
}

//1.Function expression
const print = function () {
  //anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();

//Arrow function
const simplePrint = () => console.log('simple!');
const add = (a, b) => a + b;
