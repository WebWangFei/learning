function Foo(name) {
  this.name = name;
}
Foo.prototype.sayName = function () {
  console.log(this.name);
};

function Bar(name, age) {
  Foo.call(this, name);
  this.age = age;
}
// 两种方法绑定原型
//1. 会多创建一个新对象，之后把新对象赋值给Bar.prototype
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf ,建议第一种，虽然有副作用但是性能比较高
Bar.prototype = Object.create(Foo.prototype);
// 2.直接用ES6的，与第一种相比没有副作用但是可读性降低
// Object.setPrototypeOf(Bar.prototype, Foo.prototype);
Bar.prototype.showAge = function () {
  console.log(this.age);
};
let a = new Foo("miya");
let b = new Bar("draven", 29);
console.log("-log- ~ b", b);
a.sayName();
b.sayName();
b.showAge();

// 3.如何找到对象与委托对象(实例与类(构造函数))的关系呢，即这个对象怎么来的

// 3-1:instanceof(obj,Func)
// 缺陷：只能判断对象与函数之间的关系，无法判断对象与对象直接的联系
// 在b的整条[[Prototype]]链中是否有指向Foo.prototype的对象
console.log("--instanceof--", b instanceof Foo);

// 3-2:
// prototypeObj.isPrototypeOf,判断一个对象是否存在另一个对象的原型链上
console.log("--isPrototypeOf--", Foo.prototype.isPrototypeOf(a)); //true
console.log("--getPrototypeOf--", Object.getPrototypeOf(b) === Bar.prototype); //true

function aa(name) {
  this.name = name;
}
aa.prototype.sayName = function () {
  console.log(this.name);
};

// new 模拟
function NewFunc(o) {
  // 1.创建一个空对象
  let obj = {};
  // 2.将当前对象的原型指向构造函数的原型对象
  obj.__proto__ = o.prototype;
  // 3.执行构造函数 -> 将构造函数的this绑定为当前作用域
  let res = o.call(this);
  // 4.若构造函数有返回对象则返回该值，否则返回新对象
  return typeof res === "object" ? res : obj;
}

// Object.create 模拟
function ObjectCreate(o) {
  // 1.创建一个空函数，用来实例化，生成新对象
  function F() {}
  // 2.将函数的原型指向源对象，后续做原型链关联
  F.prototype = o;
  return new F();
}
