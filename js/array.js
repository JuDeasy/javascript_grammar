'use strict';
const fruits = ['🍎', '🍌'];

//3. forEach
//callbackFn
fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
//unshif: add an item to the beginning
fruits.unshift('🍤');
//shift: remove an item from the beginning
fruits.shift();

//Note!! shift, unshift are slower than pop, push
//splice: remove an item by index position
fruits.splice(1, 1);
//concat: combine two arrays
const fruits2 = ['🥩'];
fruits.concat(fruits2);

//5. Searcing
//find the index
//indexOf
fruits.indexOf('🥩');
//includes
fruits.includes('🍖');
//lastIndexOf
