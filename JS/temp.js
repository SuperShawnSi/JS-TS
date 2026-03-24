
// 1. 变量定义在外面，确保类定义时能读到它
let fruit = "banana";

class Demo {
  // 2. 这里的 "check" 是字符串键名
  static "check"() {}

  // 3. 这里的 person 是标识符键名
  static person() {}

  // 4. 这里的 [fruit] 会去外面找变量 fruit 的值，即 "banana"
  static [fruit]() {
    console.log(`正在执行${fruit}方法`);
  }
}


function Person2(name) {
  this.name = name;
}

Person2.prototype.sayHi = function () {
  return "Hi, I am " + this.name;
};

const p = new Person2("Tom");

console.log(p.name); // Tom
console.log(p.sayHi()); // 来自 Person.prototype
console.log(p.__proto__ === Person2.prototype); // true
console.log(Person2.prototype.constructor === Person2); // true
console.log(Person2.__proto__ === Function.prototype); // true
console.log(Object.getPrototypeOf(p) === Person2.prototype); // true
console.log(Object.getPrototypeOf(Person2.prototype) === Object.prototype); // true

function sayHi(name) {
  this.name = name;
  console.log("Hi", name);
}

const person = {};
const p2 = new sayHi("Tom");
console.log(p2.name);

sayHi("Tom");
console.log(person);

function add(a, b) {
  console.log(this);
  return a + b;
}

const obj = { x: 1 };

const result = add.call(obj, 3, 4);
console.log(result);

const user = {
  name: "小明",
  sayHi() {
    console.log(this.name);
  },
};

setTimeout(user.sayHi.bind(user), 1000);
setTimeout(() => user.sayHi(), 1000);

function outer() {
  setTimeout(() => {
    console.log(this.name);
  }, 1000);
}
p3 = { name: "Tom" };
outer.call(p3);
