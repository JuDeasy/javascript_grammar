'use strict';

//4. Constructor function
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

//6. for...in vs for...of
//for (key in obj) <= object
for (key in ellie) {
  console.log(key);
}

//for (value of array) <= only array
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

//7. Cloning
//Object.assign(target, [obj1, obj2,...])

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}

//new way
const user4 = {};
Object.assign(user4, user);
//or
const user4 = Object.assign({}, user);
