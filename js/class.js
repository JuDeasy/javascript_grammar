'use strict';

//1.Class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const kim = new Person('jukon', 25);
console.log(kim);

//2.Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age; //get age() grab this.age, must write different variable
  }
  set age(value) {
    //set age() grab =age, must write different variable, must write argument
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);

//5.Inheritance and diversity
//use extends
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
  //diversity
  draw() {
    super.draw(); // get parent method
    console.log('🔺'); //new draw method
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
