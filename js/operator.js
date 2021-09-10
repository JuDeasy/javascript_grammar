//6. Logical operators

const value1 = true;
const value2 = 5 < 2;

// || (or), finds first true and stop rests.
// the heavy function(or method) should place at the last.
// many junior developers' mistakes.
console.log(`or: ${value1 || value2 || check()}`);
function check() {
  for (let i = 0; i < 10; i++) {
    console.log('🤢');
  }
  return true;
}

//7. Equality
//object equality by reference
//quiz
const name1 = { name: 'ellie' };
const name2 = { name: 'ellie' };
const name3 = name1;
console.log(name1 == name2);
console.log(name1 === name2);
console.log(name1 === name3);

//9. Ternary operator: ?
//condition ? value1 : value2;
const name = 'ellie';
console.log(name === 'ellie' ? 'yes' : 'no');

//10. Switch statement
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away');
    break;
  //in same output, you can write case in same line
  case 'Chrome':
  case 'Firefox':
    console.log('love you');
    break;
  default:
    console.log('same all');
    break;
}
