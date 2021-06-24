/**
 * 工厂模式
 * 1.可以解决创建多个对象
 *
 * 缺点：无法确定创建的实例对象是什么类型（无法判断对象实例是具体哪个对象产生的）
 *
 */
function createPerson(name, age) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.sayName = function () {
    return o.name;
  };
  return o;
}
let createP1 = createPerson("daven", "27");
let createP2 = createPerson("miya", "28");
// 只能够类型是Object
console.log(111, createP1 instanceof Object);
console.log(222, createP2 instanceof Object);

/**构造函数
 *构造函数模式与工厂函数区别
 *1.没有显式创建对象
 *2.属性和方法赋值给this
 *3.没有return
 *4.函数一般开始为大写字母
 *5.缺点： 每个实例被创建后都会创建新的方法内存空间，没有共享方法，浪费内存资源
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
  //  相当于 this.sayName = new Function(),没有进行共享
  this.sayName = function () {
    return this.name;
  };
}
/**
 * new 创建的过程
 * 1.在内存中创建一个新对象
 * 2.新对象内部的__proto__属性被赋值为构造函数的prototype原型对象属性(绑定this)
 * 3.在新对象里执行构造函数内部的代码（方法和属性）
 * 4.如果构造函数返回非空对象，则返回这个非空对象，否则返回新创建的对象
 *
 */
const p1 = new Person("draven", "28");
const p2 = new Person("miya", "29");
console.log("--🚀-- ~ p1", p1);
console.log("--🚀-- ~ p2", p2);
// 可以明确知道属于Person构造函数
console.log("-p1-Person-", p1 instanceof Person);
console.log("-p1-Object-", p2 instanceof Object);
console.log("-p2-Person-", p2 instanceof Person);
console.log("-p2-Object-", p2 instanceof Object);

// ---------改造构造函数-----------
// function Person1(name, age) {
//   this.name = name;
//   this.age = age;
// }
// // 如果对象需要多个方法，则需要在全局作用域上定义多个函数，非常的局限
// function sayName() {
//   console.log(this.name);
// }

/**
 *原型模式
 *1.每个函数都有prototype属性，指向原型对象，原型对象包含了实例共享的方法和属性，
 *2.原型对象会自动获得一个constructor属性，这个属性指向与之关联的构造函数
 *缺点：
 (1)所有实例都共享属性，引用属性也会共享，则会引起改一处，多处都会发生变化
 (2)不能传递参数，导致原型链基本不能单独使用
 */
function Person3() {}
Person3.prototype.name = "Nicholas";
Person3.prototype.age = 29;
Person3.prototype.job = "Software Engineer";
Person3.prototype.sayName = function () {
  console.log(this.name);
};
let p3 = new Person3();
// p3.sayName(); // "Nicholas"
console.log("--🚀-- ~ p3.sayName()", p3.sayName());
console.log("-constructor", Person3.prototype.constructor === Person3); //true

// ---------盗用构造函数-----------
/**
 * 缺点：
 * (1)必须在构造函数里面定义方法，所以函数不能重用
 * (2)子类不能访问父类原型上的方法，所以也不能单独使用
 */
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}
function SubType() {
  // 继承SuperType
  SuperType.call(this, ...arguments);
}
const sub1 = new SubType("draven");
sub1.colors.push("pink");
console.log("---sub1---", sub1);
const sub2 = new SubType("miya");
sub2.colors.push("black");
console.log("---sub2---", sub2);

// ---------组合继承(伪经典继承)-----------
/**
 *弥补了原型继承和盗用构造函数的不足，也保留了instanceOf和isPrototypeOf的方法
 *缺点：调用了两次父类实例，造成内存浪费
 *
 */
function SuperType1(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType1.prototype.sayName = function () {
  console.log("---SuperType1---", this.name);
};
function SubType1(name, age) {
  // 继承属性
  // 第一次调用父类
  SuperType.call(this, name);
  this.age = age;
}
// 继承方法
// 第二次调用父类
SubType1.prototype = new SuperType1();
SubType1.prototype.sayAge = function () {
  console.log("---SubType1---", this.age);
};

const instance1 = new SubType1("draven", "28");
instance1.colors.push("black");
instance1.sayName();
instance1.sayAge();
const instance2 = new SubType1("miya", "29");
instance1.colors.push("pink");
instance1.sayName();
instance1.sayAge();

// ---------原型式继承-----------

function object(o) {
  // 对传入的对象进行的一次浅复制
  function F() {}
  F.prototype = o;
  return new F();
}
let person = {
  name: "draven",
  colors: ["black"],
};
const person1 = object(person);
person1.name = "haha";
person1.colors.push("white");
const person2 = object(person);
person2.name = "haha1";
person2.colors.push("white1");
console.log("---person1---", person1);
console.log("---person2---", person2);
console.log("---person---", person);

// es6新增Object.create来规范上述的流程
let newPerson = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"],
};
let anotherPerson = Object.create(newPerson);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
console.log("--🚀-- ~ anotherPerson", anotherPerson);
let yetAnotherPerson = Object.create(newPerson, {
  name: {
    value: "Linda",
  },
});
// yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
console.log("--🚀-- ~ yetAnotherPerson", yetAnotherPerson);
console.log("---newPerson---", newPerson);

// ---------寄生式继承-----------
/**
 * 创建一个实现继承的函数，以某种 方式增强对象，然后返回这个对象
 *
 *
 */
function createAnother(original) {
  let clone = object(original); // 通过调用函数创建一个新对象
  clone.sayHi = function () {
    // 以某种方式增强这个对象
    console.log("hi");
  };
  return clone; // 返回这个对象
}

// ---------寄生式组合继承(最优解)----------
/**
 *不通过调用父类构造函数给子类原型赋值,而是取得父类原型的一个副本
 *
 *
 */
function inheritPrototype(subType, superType) {
  // let prototype = object(superType.prototype); // 创建对象
  let prototype = Object.create(superType.prototype); // 创建父类原型的一个副本对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 赋值对象
}
